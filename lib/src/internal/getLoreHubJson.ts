import { LoreHubJson } from "./dto/LoreHubJson";

export default function getLoreHubJson(json: unknown): LoreHubJson {
  if (json == null)
    throw new Error("Cannot getNodes() because json is null or undefined");
  if (typeof json !== "object")
    throw new Error("Cannot getNodes() because json is not an object");

  const maybeLoreHubJson = json as LoreHubJson;

  // TODO validations
  return maybeLoreHubJson;
}
