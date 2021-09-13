import DialogNode from "./entities/DialogNode";
import { LoreHubJson, LoreHubJsonNode } from "./dto/LoreHubJson";

export default function getNodes(json: LoreHubJson): Array<DialogNode> {
  const startNode = json.nodes.find(({ id }) => id === json.starting_node_id);

  if (!startNode) {
    throw new Error("Cannot build nodes because start node is undefined");
  }

  const result = json.nodes
    .sort((prev, next) => (next?.id === prev?.next_node_id ? -1 : 1))
    .map((node) => DialogNode.buildFromUnknown(node));

  return result;
}
