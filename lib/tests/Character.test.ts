import { describe, expect, test } from "@jest/globals";

import Character from "../src/internal/entities/Character";

describe("Character.toRenpyCharacterDefineLine()", () => {
  test("latin name should create correct name", () => {
    const character = new Character("1", "Oliver");
    const expected = `define oliver = Character('Oliver')`;

    const result = character.toRenpyCharacterDefineLine();

    expect(result).toStrictEqual(expected);
  });

  test("cyrillic name should create correct name", () => {
    const character = new Character("1", "Оливер");
    const expected = `define oliver = Character('Оливер')`;

    const result = character.toRenpyCharacterDefineLine();

    expect(result).toStrictEqual(expected);
  });

  test("with spaces name should create correct name", () => {
    const character = new Character("1", "Oliver Vertran");
    const expected = `define oliver_vertran = Character('Oliver Vertran')`;

    const result = character.toRenpyCharacterDefineLine();

    expect(result).toStrictEqual(expected);
  });
});
