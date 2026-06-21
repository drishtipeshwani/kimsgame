import { GoogleGenAI, Type } from '@google/genai';
import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';
import mime from 'mime-types';
import { SUMMER_SOLSTICE_ELEMENTS } from './summer-solstice-elements';
import { WINTER_SOLSTICE_ELEMENTS } from './winter-solstice-elements';

// Load environment variables from Next.js standard env file
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-pro';

if (!API_KEY) {
  console.error('Error: GEMINI_API_KEY environment variable is missing.');
  process.exit(1);
}

// Initialize Gemini Client
const geminiClient = new GoogleGenAI({ apiKey: API_KEY });

// Paths
const SKILLS_DIR = path.resolve(process.cwd(), 'skills/css-art');
const ASSETS_DIR = path.join(SKILLS_DIR, 'assets');
const SKILL_MD_PATH = path.join(SKILLS_DIR, 'SKILL.md');
const OUTPUT_DIR = path.resolve(process.cwd(), 'elements');

// Ensure Output Directory Exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/** e.g. "coffee-mug" → "CoffeeMug", "sunflower" → "Sunflower" */
function toPascalCase(name: string): string {
  return name
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
}

/**
 * Reads local files and converts them to the Gemini InlineData format.
 */
function getContextParts() {
  if (!fs.existsSync(ASSETS_DIR)) return [];

  const parts: any[] = [];
  const files = fs.readdirSync(ASSETS_DIR);

  for (const file of files) {
    // 1. Ignore useless build files
    if (file.includes('tsconfig') || file.includes('tsbuildinfo')) {
      console.log(`⏭️  Skipping build file: ${file}`);
      continue;
    }

    const filePath = path.join(ASSETS_DIR, file);
    const ext = path.extname(file).toLowerCase();

    // 2. Handle Text/Code Files
    if (['.css', '.tsx', '.ts', '.md', '.json'].includes(ext)) {
      const textContent = fs.readFileSync(filePath, 'utf-8');
      
      // Wrap the file content in markdown format so Gemini knows what it's looking at
      parts.push(
        `\n--- Reference File: ${file} ---\n\`\`\`${ext.replace('.', '')}\n${textContent}\n\`\`\`\n`
      );
      console.log(`📄 Added text context: ${file}`);
    } 
    // 3. Handle Images
    else if (['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'].includes(ext)) {
      const mimeType = mime.lookup(filePath) || 'image/jpeg';
      parts.push({
        inlineData: {
          data: fs.readFileSync(filePath).toString('base64'),
          mimeType,
        },
      });
      console.log(`🖼️  Added image context: ${file}`);
    }
    // 4. Fallback warning
    else {
      console.warn(`⚠️  Skipping unknown file type: ${file}`);
    }
  }

  return parts;
}

/** "Element Name|optional description" or just "Element Name" */
function parseElement(entry: string): { name: string; description?: string } {
  const pipeIndex = entry.indexOf('|');
  if (pipeIndex === -1) {
    return { name: entry.trim() };
  }

  const name = entry.slice(0, pipeIndex).trim();
  const description = entry.slice(pipeIndex + 1).trim();
  return description ? { name, description } : { name };
}

/**
 * Main Generation Function
 */
async function generateElement(
  elementName: string,
  description: string | undefined,
  systemInstruction: string,
  contextParts: any[]
) {
  const fileName = toPascalCase(elementName);
  console.log(`\n✨ Generating CSS Art for: ${elementName} → ${fileName}...`);
  if (description) {
    console.log(`   Detailed Instructions: "${description}"`);
  }

  const userPrompt = description
    ? `Create the CSS art and React component for: ${elementName}.
       Specific structural requirements: ${description}.
       Export the component as "${fileName}" (default export).
       Ensure the TSX imports the module.css file as: import styles from './${fileName}.module.css';`
    : `Create the CSS art and React component for: ${elementName}.
       Export the component as "${fileName}" (default export).
       Ensure the TSX imports the module.css file as: import styles from './${fileName}.module.css';`;

  try {
    const response = await geminiClient.models.generateContent({
      model: MODEL,
      contents: [
        ...contextParts,
        userPrompt,
      ],
      config: {
        systemInstruction: systemInstruction,
        // Enforce JSON output so we don't have to parse markdown code blocks manually
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            plan: {
              type: Type.STRING,
              description: 'Your step-by-step architectural plan detailing base shapes and CSS properties before writing the code.',
            },
            tsxCode: {
              type: Type.STRING,
              description: 'The raw typescript react component code (TSX). Do not wrap in markdown.',
            },
            cssCode: {
              type: Type.STRING,
              description: 'The raw standard CSS module code. Do not wrap in markdown.',
            },
          },
          required: ['plan','tsxCode', 'cssCode'],
        },
      },
    });

    const resultText = response.text;
    if (!resultText) throw new Error('No text returned from Gemini API.');

    // Parse the structured JSON response
    const { plan, tsxCode, cssCode } = JSON.parse(resultText);

    // Log the plan
    console.log('🧠 Plan:', plan);

    // File Paths
    const tsxPath = path.join(OUTPUT_DIR, `${fileName}.tsx`);
    const cssPath = path.join(OUTPUT_DIR, `${fileName}.module.css`);

    // Write Files
    fs.writeFileSync(tsxPath, tsxCode, 'utf-8');
    fs.writeFileSync(cssPath, cssCode, 'utf-8');

    console.log(`✅ Success! Saved to:`);
    console.log(`   - ${tsxPath}`);
    console.log(`   - ${cssPath}`);

  } catch (error) {
    console.error(`❌ Failed to generate ${elementName}:`, error);
  }
}

function elementOutputExists(elementName: string): boolean {
  const fileName = toPascalCase(elementName);
  const tsxPath = path.join(OUTPUT_DIR, `${fileName}.tsx`);
  const cssPath = path.join(OUTPUT_DIR, `${fileName}.module.css`);
  return fs.existsSync(tsxPath) && fs.existsSync(cssPath);
}

/**
 * Script Execution Entry Point
 */
async function main() {
  const args = process.argv.slice(2);
  const useWinterTheme = args.includes('--winter');
  const useSummerTheme = args.includes('--summer');

  if (useWinterTheme && useSummerTheme) {
    console.error('Error: --winter and --summer cannot be used together.');
    process.exit(1);
  }

  const elements = useWinterTheme
    ? [...WINTER_SOLSTICE_ELEMENTS]
    : useSummerTheme
      ? [...SUMMER_SOLSTICE_ELEMENTS]
      : args.filter((arg) => !arg.startsWith('--'));

  if (elements.length === 0) {
    console.log('Usage: npx tsx scripts/generate-css-art.ts <element1> <element2> ...');
    console.log('       npx tsx scripts/generate-css-art.ts --winter');
    console.log('       npx tsx scripts/generate-css-art.ts --summer');
    console.log('');
    console.log('Examples:');
    console.log('  npx tsx scripts/generate-css-art.ts "Christmas Tree" "Snow Globe|spherical glass base"');
    console.log('  npx tsx scripts/generate-css-art.ts --winter');
    console.log('  npx tsx scripts/generate-css-art.ts --summer');
    console.log('');
    console.log('Shortcut: npm run generate:elements -- --winter');
    console.log('Shortcut: npm run generate:elements -- --summer');
    console.log(
      `Winter theme includes ${WINTER_SOLSTICE_ELEMENTS.length} elements from themes/winter-solstice.md`
    );
    console.log(
      `Summer theme includes ${SUMMER_SOLSTICE_ELEMENTS.length} elements from themes/summer-solstice.md`
    );
    process.exit(1);
  }

  // 2. Read context
  let skillInstruction = '';
  if (fs.existsSync(SKILL_MD_PATH)) {
    skillInstruction = fs.readFileSync(SKILL_MD_PATH, 'utf-8');
    console.log('📖 Loaded Skill.md instructions.');
  } else {
    console.warn('⚠️ Warning: Skill.md not found. Generating without base instructions.');
  }

  const contextParts = getContextParts();
  if (contextParts.length > 0) {
    console.log(`🖼️ Loaded ${contextParts.length} assets for visual context.`);
  }

  // 3. Process each element sequentially to generate the CSS art
  for (const element of elements) {
    const { name, description } = parseElement(element);

    if (elementOutputExists(name)) {
      const fileName = toPascalCase(name);
      console.log(
        `♻️  Replacing existing ${fileName}.tsx and ${fileName}.module.css`
      );
    }

    await generateElement(name, description, skillInstruction, contextParts);
  }
  
  console.log('\n🎉 All CSS art generations complete.');
}

main();