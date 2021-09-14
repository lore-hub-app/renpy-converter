import { describe, expect, test } from "@jest/globals";

import Character from "../src/internal/entities/Character";
import {
  ContentReference,
  ContentText,
} from "../src/internal/entities/Content";
import DialogNode from "../src/internal/entities/DialogNode";

describe("DialogNode.toRenpyLine()", () => {
  test("node with simple text should convert", () => {
    const node = new DialogNode("1", null, [new ContentText("some text")]);

    const expected = `"some text"\n`;

    // act
    const result = node.toRenpyLine();

    expect(result).toStrictEqual(expected);
  });

  test("node with multi line text should convert", () => {
    const node = new DialogNode("1", null, [
      new ContentText("some text"),
      new ContentText("second"),
    ]);

    const expected = `"some text\nsecond"\n`;

    // act
    const result = node.toRenpyLine();

    expect(result).toStrictEqual(expected);
  });

  test("node with ref and character should use var name", () => {
    const character = new Character("charId", "Oliver");

    const node = new DialogNode("1", null, [
      new ContentReference("charId", null),
      new ContentText("text"),
    ]);

    const expected = `oliver "text"\n`;

    // act
    const result = node.toRenpyLine([character]);

    expect(result).toStrictEqual(expected);
  });

  test("node with ref but explicit name should set name", () => {
    const node = new DialogNode("1", null, [
      new ContentReference("1", "Oliver"),
      new ContentText("text"),
    ]);

    const expected = `"Oliver" "text"\n`;

    // act
    const result = node.toRenpyLine();

    expect(result).toStrictEqual(expected);
  });
});
