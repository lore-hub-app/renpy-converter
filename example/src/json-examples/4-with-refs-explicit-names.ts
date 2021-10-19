const json = {
  dialog_id: "8122dbda-b483-481b-893e-4f63123e400d",
  starting_node_id: "d4bb55d4-b0b0-43fb-8460-3f36409ea012",
  player_versions: ["1.5"],
  documents: [
    { id: "1d45bcdc-7e32-4b57-9779-b924bbce93c1", name: "Оливер Вертран" },
    { id: "7f8f54e2-ba62-453d-b6e6-d9b99f29bdbc", name: "Кел Домиан" },
  ],
  nodes: [
    {
      id: "d4bb55d4-b0b0-43fb-8460-3f36409ea012",
      next_node_id: "41aecaf4-350f-468e-8ba9-9498c47de447",
      contents: [
        {
          id: "e586995d-225b-4dc4-a933-18a5bf7f2ab9",
          content_data_reference: {
            text: "Kael",
            document_id: "7f8f54e2-ba62-453d-b6e6-d9b99f29bdbc",
          },
          content_data_text: null,
        },
        {
          id: "d017ee09-f0cb-4b57-9450-ea5c30186a41",
          content_data_reference: null,
          content_data_text: { text: "- Hi, Oliver!" },
        },
      ],
    },
    {
      id: "50f9eca5-5924-4b92-80c2-716ae213f9a1",
      next_node_id: "",
      contents: [
        {
          id: "70637886-2a13-447e-b396-ad078b095ea1",
          content_data_reference: null,
          content_data_text: { text: "Boys hugs." },
        },
      ],
    },
    {
      id: "41aecaf4-350f-468e-8ba9-9498c47de447",
      next_node_id: "50f9eca5-5924-4b92-80c2-716ae213f9a1",
      contents: [
        {
          id: "4979dec9-427a-4649-8faa-b7791056457e",
          content_data_reference: {
            text: "Oliver",
            document_id: "1d45bcdc-7e32-4b57-9779-b924bbce93c1",
          },
          content_data_text: null,
        },
        {
          id: "c2d1d165-b395-4f10-8944-e7ead1224560",
          content_data_reference: null,
          content_data_text: { text: "- How are you!" },
        },
      ],
    },
  ],
};

export default json;
