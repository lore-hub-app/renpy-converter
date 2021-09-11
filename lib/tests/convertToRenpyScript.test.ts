import getNodes from "../src/internal/getNodes";
import getLoreHubJson from "../src/internal/getLoreHubJson";
import convertToRenpyScript from "../src/internal/convertToRenpyScript";
import getCharacters from "../src/internal/getCharacters";

import plain_text_dialog_single_line from "./jsonExamples/1-plain-text-dialog-single-line";
import plain_text_multiple_line from "./jsonExamples/2-plain-text-multiple-line";
import with_refs from "./jsonExamples/3-with-refs";
import with_refs_explicit_names from "./jsonExamples/4-with-refs-explicit-names";
import branching_dialog from "./jsonExamples/5-branching-dialog";

describe("convertToRenpyScript.test", () => {
  test("1-plain-text-dialog-single-line should convert", () => {
    // arrange
    const expected = `label start:
"This is simple one line dialog with two nodes."
"This is the second node from LoreHub with ❤"\n`;

    const json = getLoreHubJson(plain_text_dialog_single_line);
    const nodes = getNodes(json);

    // act
    const result = convertToRenpyScript(nodes);

    expect(result).toEqual(expected);
  });

  test("2-plain-text-multiple-line should convert", () => {
    // arrange
    const expected = `label start:
"Multi line Node
Second one"\n`;
    const json = getLoreHubJson(plain_text_multiple_line);
    const nodes = getNodes(json);

    // act
    const result = convertToRenpyScript(nodes);

    expect(result).toStrictEqual(expected);
  });

  test("3-with-refs should convert", () => {
    // arrange
    const expected = `define oliver_vertran = Character('Оливер Вертран')
define kel_domian = Character('Кел Домиан')

label start:
kel_domian "- Hi, Oliver!"
oliver_vertran "- How are you!"
"Boys hugs."\n`;

    const json = getLoreHubJson(with_refs);
    const nodes = getNodes(json);
    const characters = getCharacters(json.documents);

    // act
    const result = convertToRenpyScript(nodes, characters);

    expect(result).toStrictEqual(expected);
  });

  test("4-with-refs-explicit-names should convert", () => {
    // arrange
    const expected = `define oliver_vertran = Character('Оливер Вертран')
define kel_domian = Character('Кел Домиан')

label start:
"Kael" "- Hi, Oliver!"
"Oliver" "- How are you!"
"Boys hugs."\n`;

    const json = getLoreHubJson(with_refs_explicit_names);
    const nodes = getNodes(json);
    const characters = getCharacters(json.documents);

    // act
    const result = convertToRenpyScript(nodes, characters);

    expect(result).toStrictEqual(expected);
  });
});
