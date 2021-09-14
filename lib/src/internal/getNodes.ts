import DialogNode from "./entities/DialogNode";
import { LoreHubJson } from "./dto/LoreHubJson";

export default ({ nodes }: LoreHubJson) =>
  nodes
    .sort((prev, next) => (next?.id === prev?.next_node_id ? -1 : 1))
    .map((node) => DialogNode.buildFromUnknown(node));
