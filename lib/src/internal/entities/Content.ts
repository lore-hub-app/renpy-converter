import { LoreHubJsonContent, LoreHubJsonDocument } from "../dto/LoreHubJson";

export interface Content {
  text: string | null;
}

export class ContentText implements Content {
  constructor(public readonly text: string) { }
}

export class ContentReference implements Content {
  constructor(
    public readonly document_id: string,
    public readonly text: string | null,
  ) { }
}

export function buildContent(
  data: LoreHubJsonContent
): ContentText | ContentReference {
  if (data.content_data_text != null) {
    return new ContentText(data.content_data_text.text);
  } else if (data.content_data_reference != null) {
    return new ContentReference(
      data.content_data_reference.document_id,
      data.content_data_reference.text,
    );
  } else {
    throw new Error(
      "Cannot buildContent() because content_data_text and content_data_reference are null"
    );
  }
}
