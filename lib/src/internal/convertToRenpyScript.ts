import Character from "./entities/Character";
import { ContentReference } from "./entities/Content";
import DialogNode from "./entities/DialogNode";

export default function convertToRenpyScript(
  nodes: Array<DialogNode>,
  characters: Array<Character> = []): string {
  const result = [];
  for (let c = 0; c < characters.length; c++) {
    const character = characters[c];
    result.push(character.toRenpyCharacterDefineLine());
    result.push("\n")
    if (!isNotLast(c, characters)) {
      result.push("\n")
    }
  }

  result.push("label start:\n");

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    result.push(node.toRenpyLine(characters));

  }
  return result.join("");
}


function isNotLast(i: number, array: Array<any>) {
  return i + 1 !== array.length;
}
