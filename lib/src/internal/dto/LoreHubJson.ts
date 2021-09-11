export interface LoreHubJson {
  starting_node_id: string;
  documents: Array<LoreHubJsonDocument>;
  nodes: Array<LoreHubJsonNode>;
}

export interface LoreHubJsonNode {
  id: string;
  next_node_id: string | null;
  contents: Array<LoreHubJsonContent>;
}

export interface LoreHubJsonContent {
  id: string;
  content_data_reference: LoreHubJsonContentReference | null;
  content_data_text: LoreHubJsonContentText | null;
}

export interface LoreHubJsonContentText {
  text: string;
}

export interface LoreHubJsonContentReference {
  text: string | null;
  document_id: string;
}

export interface LoreHubJsonDocument {
  id: string;
  name: string;
}
