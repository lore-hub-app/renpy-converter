import { describe, expect, test } from "@jest/globals";

import getNodes from "../src/internal/getNodes";
import empty from "./jsonExamples/0-empty";
import dialog_with_orphan_nodes from './jsonExamples/1-dialog-with-orphan-nodes';
import plain_text_dialog_single_line from "./jsonExamples/1-plain-text-dialog-single-line";
import plain_text_dialog_single_line_wrong_order from "./jsonExamples/1a-plain-text-dialog-single-line-wrong-order";
import plain_text_multiple_line from "./jsonExamples/2-plain-text-multiple-line";
import with_refs from "./jsonExamples/3-with-refs";
import with_refs_explicit_names from "./jsonExamples/4-with-refs-explicit-names";
import DialogNode from "../src/internal/entities/DialogNode";
import getLoreHubJson from "../src/internal/getLoreHubJson";
import {
  ContentReference,
  ContentText,
} from "../src/internal/entities/Content";

describe("getNodes", () => {
  test("Should return an empty array when nodes array is empty", () => {
    const json = getLoreHubJson(empty);

    expect(() => getNodes(json)).toThrowError();
  });

  test("1-dialog-with-orphan-nodes should convert", () => {
    // arrange
    const expected = [];
    expected.push(
      new DialogNode(
        "2e086dc2-1ec1-4e0c-97c7-11bf5d90fb75",
        null,
        [new ContentText("This is simple one line dialog with two nodes.")]
      )
    );
    const json = getLoreHubJson(dialog_with_orphan_nodes);

    // act
    const result = getNodes(json);

    // assert
    expect(result).toStrictEqual(expected);
  });

  test("1-plain-text-dialog-single-line should convert", () => {
    // arrange
    const expected = [];
    expected.push(
      new DialogNode(
        "2e086dc2-1ec1-4e0c-97c7-11bf5d90fb75",
        "c94ae77d-c988-4d2a-906b-3b1526e2c044",
        [new ContentText("This is simple one line dialog with two nodes.")]
      )
    );
    expected.push(
      new DialogNode("c94ae77d-c988-4d2a-906b-3b1526e2c044", "", [
        new ContentText("This is the second node from LoreHub with ❤"),
      ])
    );

    const json = getLoreHubJson(plain_text_dialog_single_line);

    // act
    const result = getNodes(json);

    expect(result).toStrictEqual(expected);
  });

  test("1-plain-text-dialog-single-line-wrong-order should convert", () => {
    // arrange
    const expected = [];
    expected.push(
      new DialogNode(
        "2e086dc2-1ec1-4e0c-97c7-11bf5d90fb75",
        "c94ae77d-c988-4d2a-906b-3b1526e2c044",
        [new ContentText("This is simple one line dialog with two nodes.")]
      )
    );
    expected.push(
      new DialogNode("c94ae77d-c988-4d2a-906b-3b1526e2c044", "", [
        new ContentText("This is the second node from LoreHub with ❤"),
      ])
    );

    const json = getLoreHubJson(plain_text_dialog_single_line_wrong_order);

    // act
    const result = getNodes(json);

    expect(result).toStrictEqual(expected);
  });

  test("2-plain-text-multiple-line should convert", () => {
    // arrange
    const expected = [];
    expected.push(
      new DialogNode("4930ef23-2eda-4238-bcea-8cea8749084e", "", [
        new ContentText("Multi line Node"),
        new ContentText("Second one"),
      ])
    );

    const json = getLoreHubJson(plain_text_multiple_line);

    // act
    const result = getNodes(json);

    expect(result).toStrictEqual(expected);
  });

  test("3-with-refs should convert", () => {
    // arrange
    const expected = [];
    expected.push(
      new DialogNode(
        "d4bb55d4-b0b0-43fb-8460-3f36409ea012",
        "41aecaf4-350f-468e-8ba9-9498c47de447",
        [
          new ContentReference("7f8f54e2-ba62-453d-b6e6-d9b99f29bdbc", null),
          new ContentText("- Hi, Oliver!"),
        ]
      )
    );
    expected.push(
      new DialogNode(
        "41aecaf4-350f-468e-8ba9-9498c47de447",
        "50f9eca5-5924-4b92-80c2-716ae213f9a1",
        [
          new ContentReference("1d45bcdc-7e32-4b57-9779-b924bbce93c1", null),
          new ContentText("- How are you!"),
        ]
      )
    );
    expected.push(
      new DialogNode("50f9eca5-5924-4b92-80c2-716ae213f9a1", "", [
        new ContentText("Boys hugs."),
      ])
    );

    const json = getLoreHubJson(with_refs);

    // act
    const result = getNodes(json);

    expect(result).toStrictEqual(expected);
  });

  test("4-with-refs-explicit-names should convert", () => {
    // arrange
    const expected = [];
    expected.push(
      new DialogNode(
        "d4bb55d4-b0b0-43fb-8460-3f36409ea012",
        "41aecaf4-350f-468e-8ba9-9498c47de447",
        [
          new ContentReference("7f8f54e2-ba62-453d-b6e6-d9b99f29bdbc", "Kael"),
          new ContentText("- Hi, Oliver!"),
        ]
      )
    );
    expected.push(
      new DialogNode(
        "41aecaf4-350f-468e-8ba9-9498c47de447",
        "50f9eca5-5924-4b92-80c2-716ae213f9a1",
        [
          new ContentReference(
            "1d45bcdc-7e32-4b57-9779-b924bbce93c1",
            "Oliver"
          ),
          new ContentText("- How are you!"),
        ]
      )
    );
    expected.push(
      new DialogNode("50f9eca5-5924-4b92-80c2-716ae213f9a1", "", [
        new ContentText("Boys hugs."),
      ])
    );

    const json = getLoreHubJson(with_refs_explicit_names);

    // act
    const result = getNodes(json);

    expect(result).toStrictEqual(expected);
  });
});
