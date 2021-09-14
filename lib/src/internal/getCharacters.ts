import { LoreHubJsonDocument } from "./dto/LoreHubJson";
import Character from "./entities/Character";

export default function getCharacters(
  documents: Array<LoreHubJsonDocument>
): Array<Character> {
  return documents.map((d) => new Character(d.id, d.name));
}
