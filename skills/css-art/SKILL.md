---
name: css-art
description: Generates highly realistic, structurally sound CSS Art for a specified object using React (TSX) and CSS Modules.
---

# css-art

## Overview
This skill guides the creation of realistic CSS Art. It ensures the output is modular, visually refined, structurally contained, and accessible.

## Instructions

### 1. File Creation & Setup
- Always create two files for the requested object: `${objectName}.tsx` and `${objectName}.module.css`.
- All `${objectName}.tsx` files MUST import a shared CSS module named `shared.module.css`. In order to do this, this exact import line can be added - `import shared from "./shared.module.css";`
- Ensure the main wrapper element in the component uses `role="img"` and an appropriate `aria-label` for accessibility.

### 2. Learning from Assets (Style & Architecture)
- Refer to the example assets located in `skills/css-art/assets`, specifically the Sunflower and Coffee Mug examples. 
- **Observe the Architecture:** Notice how every distinct part of the object is broken down into its own individually styled `div`.
- **Observe the Aesthetic:** The goal is a clean, minimalist, high-end realism. Achieve this by mastering advanced properties like `transform`, `border-radius`, `linear-gradient`, `radial-gradient`, `box-shadow`, `filter`, etc. 
- **Observe the Containment:** The parent container should act as a relative canvas (`position: relative`), while the child elements are precisely placed using `position: absolute`.
- **Observe the Size** - The size of the parent div of the resulting CSS art should not be more than 50px*50px

### 3. Execution Step-by-Step
Before writing any code, output a brief plan detailing:
1. The base shapes required to build the object.
2. The specific CSS properties (gradients, shadows) needed to create depth and realistic lighting for those shapes.

Once the plan is outlined, generate the code for both the `.tsx` and `.module.css` files.