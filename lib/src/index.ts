import convertToRenpyScript from "./internal/convertToRenpyScript";
import getCharacters from "./internal/getCharacters";
import getLoreHubJson from "./internal/getLoreHubJson";
import getNodes from "./internal/getNodes";

export default function convert(data: unknown) {
  const typedJson = getLoreHubJson(data);
  const nodes = getNodes(typedJson);
  const characters = getCharacters(typedJson.documents);
  return convertToRenpyScript(nodes, characters);
}
