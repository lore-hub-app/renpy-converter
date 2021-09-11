import { LoreHubJsonDocument, LoreHubJsonNode } from "../dto/LoreHubJson";
import Character from "./Character";
import { buildContent, Content, ContentReference, ContentText } from "./Content";

export default class DialogNode {
  constructor(
    public readonly id: string,
    public readonly next_node_id: string | null,
    public readonly contents: Array<Content>
  ) { }

  static buildFromUnknown(data: LoreHubJsonNode): DialogNode {
    const contents = [];
    for (let i = 0; i < data.contents.length; i++) {
      contents.push(buildContent(data.contents[i]));
    }

    return new DialogNode(data.id, data.next_node_id, contents);
  }

  toRenpyLine(characters: Array<Character> = []): string {
    const result: Array<string> = [];
    const neededContent = this.contents.filter(c => c instanceof ContentText);

    // add character name if its presented and is explicitly set
    if (this.contents[0] instanceof ContentReference && this.contents[0].text && this.contents[0].text !== "") {
      result.push(`"${this.contents[0].text}" `)
    }
    else if (this.contents[0] instanceof ContentReference) {
      const asRef = this.contents[0] as ContentReference;
      const neededCharacter = characters.find(c => c.id === asRef.document_id);
      if (neededCharacter == null) throw new Error(`Cannot find character/document with id ${asRef.document_id}`);
      result.push(`${neededCharacter?.varName} `);
    }

    // add all text content
    result.push("\"");
    for (let i = 0; i < neededContent.length; i++) {
      const content = neededContent[i];
      result.push(`${content.text}`);
      if (i + 1 !== neededContent.length)
        result.push("\n")
    }
    result.push("\"")
    result.push("\n")
    return result.join("");
  }

}
