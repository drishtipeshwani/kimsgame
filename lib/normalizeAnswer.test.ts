import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { parseRecallInput } from "./gameLogic";
import { normalizeAnswer } from "./normalizeAnswer";
import type { ElementMeta } from "./elementTypes";
import { scoreAnswers } from "./scoring";

function mockElement(
  id: string,
  name: string,
  synonyms: string[] = []
): ElementMeta {
  return {
    id,
    name,
    synonyms,
    Component: () => null,
  };
}

describe("normalizeAnswer", () => {
  it("lowercases and joins spaced words", () => {
    assert.equal(normalizeAnswer("Snow Man"), "snowman");
  });

  it("lowercases and joins hyphenated words", () => {
    assert.equal(normalizeAnswer("snow-man"), "snowman");
  });

  it("singularizes trailing s plurals", () => {
    assert.equal(normalizeAnswer("plums"), "plum");
  });

  it("singularizes ies endings", () => {
    assert.equal(normalizeAnswer("Cherries"), "cherry");
    assert.equal(normalizeAnswer("Blueberries"), "blueberry");
  });

  it("singularizes compound spaced plurals", () => {
    assert.equal(normalizeAnswer("Wool Socks"), "woolsock");
  });

  it("does not strip valid ss endings", () => {
    assert.equal(normalizeAnswer("glass"), "glass");
  });

  it("singularizes es endings when long enough", () => {
    assert.equal(normalizeAnswer("glasses"), "glass");
  });
});

describe("parseRecallInput", () => {
  it("dedupes guesses by normalized form", () => {
    assert.deepEqual(parseRecallInput("Snow Man, snowman, SNOW-MAN"), [
      "Snow Man",
    ]);
  });
});

describe("scoreAnswers", () => {
  const roundElements = [
    mockElement("snow-man", "Snow Man", ["snowman"]),
    mockElement("plum", "Plum"),
    mockElement("wool-socks", "Wool Socks", ["socks"]),
  ];

  it("matches guesses with different spacing and hyphenation", () => {
    const result = scoreAnswers(["snow-man", "Snow Man"], roundElements);

    assert.deepEqual(result.correct, ["Snow Man"]);
    assert.deepEqual(result.wrong, []);
  });

  it("matches singular guesses against plural element names", () => {
    const result = scoreAnswers(["plums"], roundElements);

    assert.deepEqual(result.correct, ["Plum"]);
    assert.deepEqual(result.wrong, []);
  });

  it("matches spaced plural guesses against element names", () => {
    const result = scoreAnswers(["wool socks"], roundElements);

    assert.deepEqual(result.correct, ["Wool Socks"]);
    assert.deepEqual(result.wrong, []);
  });

  it("does not penalize wrong guesses", () => {
    const result = scoreAnswers(["plums", "banana", "apple"], roundElements);

    assert.equal(result.score, 1);
    assert.deepEqual(result.correct, ["Plum"]);
    assert.deepEqual(result.wrong, ["banana", "apple"]);
  });
});
