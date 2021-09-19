import DialogNode from "./entities/DialogNode";
import { LoreHubJson } from "./dto/LoreHubJson";

export default (json: LoreHubJson): DialogNode[] => {
  const startNode = json.nodes.find((n) => n.id === json.starting_node_id);

  if (!startNode) throw new Error("Starting node not found");

  return json.nodes
    .sort((prev, next) => (next?.id === prev?.next_node_id ? -1 : 1))
    .map((node) => DialogNode.buildNode(node));
};
