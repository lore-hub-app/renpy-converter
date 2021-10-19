const json = {
  dialog_id: "a79f2f0a-9219-4f4e-bfc4-0acdc25d683c",
  starting_node_id: "f29667eb-8334-4f7c-8e18-3ab62831d577",
  player_versions: ["2.0"],
  documents: [
    { id: "3893ecdf-eb15-46f1-ae8b-3001d611c03e", name: "Кристиан Орвуд" },
    { id: "1d45bcdc-7e32-4b57-9779-b924bbce93c1", name: "Оливер Вертран" },
  ],
  nodes: [
    {
      id: "bb920770-d479-4c34-a586-1c304950e221",
      next_node_id: "",
      options: [],
      contents: [
        {
          id: "6a237366-02d6-4894-8cc9-716bf7b88e7e",
          content_data_reference: {
            text: "",
            document_id: "1d45bcdc-7e32-4b57-9779-b924bbce93c1",
          },
          content_data_text: null,
        },
        {
          id: "3320610c-b738-4fa1-8323-fe3ba060da18",
          content_data_reference: null,
          content_data_text: { text: "— Прости меня..." },
        },
      ],
    },
    {
      id: "fabce5e6-587c-4b3f-bd42-2d3401e2f479",
      next_node_id: "",
      options: [],
      contents: [
        {
          id: "a25a8305-2dfc-42e0-9a3e-452e32703eb4",
          content_data_reference: null,
          content_data_text: { text: "Оливер убегает." },
        },
      ],
    },
    {
      id: "f29667eb-8334-4f7c-8e18-3ab62831d577",
      next_node_id: "",
      options: [
        {
          next_dialog_node_id: "aba11ba2-3c8c-4c82-a7cd-e25b2f414d1e",
          text: "— Я не хотел!",
        },
        {
          next_dialog_node_id: "b8a78827-a5f4-427f-be0c-8e6db80244ce",
          text: "— Ты заслужил этого!",
        },
      ],
      contents: [
        {
          id: "af6ab7e8-db73-4ae3-93f5-fe8205fefdb7",
          content_data_reference: {
            text: "",
            document_id: "3893ecdf-eb15-46f1-ae8b-3001d611c03e",
          },
          content_data_text: null,
        },
        {
          id: "01c90e30-e0cf-413a-b758-6c0f9c68c5e8",
          content_data_reference: null,
          content_data_text: { text: "— Почему ты оставил меня?" },
        },
      ],
    },
    {
      id: "b8a78827-a5f4-427f-be0c-8e6db80244ce",
      next_node_id: "fabce5e6-587c-4b3f-bd42-2d3401e2f479",
      options: [],
      contents: [
        {
          id: "b9ffd2f3-9e00-429c-bf12-beea13fbc6e9",
          content_data_reference: {
            text: "",
            document_id: "3893ecdf-eb15-46f1-ae8b-3001d611c03e",
          },
          content_data_text: null,
        },
        {
          id: "91bd1c19-c286-479c-a9e7-1b5880980d05",
          content_data_reference: null,
          content_data_text: { text: "— После всего что я для тебя сделал!" },
        },
      ],
    },
    {
      id: "aba11ba2-3c8c-4c82-a7cd-e25b2f414d1e",
      next_node_id: "bb920770-d479-4c34-a586-1c304950e221",
      options: [],
      contents: [
        {
          id: "f2c40645-227a-4110-969d-5fbdf27644bb",
          content_data_reference: null,
          content_data_text: { text: "Кристиан обнимает Оливера." },
        },
      ],
    },
  ],
};

export default json;
