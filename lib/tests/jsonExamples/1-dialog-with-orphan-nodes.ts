const json = {
  dialog_id: "f6746e26-0c83-41a6-b83c-93d5b563065f",
  starting_node_id: "2e086dc2-1ec1-4e0c-97c7-11bf5d90fb75",
  player_versions: ["1.5"],
  documents: [],
  nodes: [
    {
      id: "2e086dc2-1ec1-4e0c-97c7-11bf5d90fb75",
      next_node_id: null,
      contents: [
        {
          id: "d60c263a-c096-4f78-8aa5-f41110ed4667",
          content_data_reference: null,
          content_data_text: {
            text: "This is simple one line dialog with two nodes.",
          },
        },
      ],
    },
    {
      id: "c94ae77d-c988-4d2a-906b-3b1526e2c044",
      next_node_id: "",
      contents: [
        {
          id: "971279f3-8155-4376-977f-b79605e7d1a0",
          content_data_reference: null,
          content_data_text: {
            text: "I am orphan node",
          },
        },
      ],
    },
  ],
};

export default json;
