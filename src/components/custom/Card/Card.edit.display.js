export default [
  {
    key: 'labelPosition',
    ignore: true,
  },
  {
    key: 'label',
    ignore: true,
  },
  {
    type: 'input',
    label: 'Заголовок',
    key: 'cardTitle',
    input: true,
    weight: 1,
    placeholder: 'Заголовок...',
    tooltip: 'Заголовок карточки',
  },
  {
    type: 'input',
    label: 'Описание',
    key: 'cardDescription',
    input: true,
    weight: 2,
    placeholder: 'Описание...',
    tooltip: 'Описание карточки',
  },
  {
    type: 'input',
    label: 'Изображение',
    key: 'cardImage',
    input: true,
    weight: 3,
    placeholder: 'Ссылка...',
    tooltip: 'Вставьте ссылку на изображение',
  },
  {
    type: 'input',
    label: 'Ссылка на webview',
    key: 'cardWebview',
    input: true,
    weight: 4,
    placeholder: 'Ссылка...',
    tooltip: 'Вставьте ссылку на webview',
  },
  {
    label: "Уникальный идентификатор",
    weight: 5,
    tooltip: "Вставьте уникальный идентификатор",
    components: [
      {
        id: "inputUUID",
        input: true,
        key: "customUUID",
        changeEvent: "input",
        customClass: "customInput",
        type: "input",
        placeholder: "UUID карточки...",
      },
      {
        id: "createUUID",
        type: "button",
        action: "custom",
        label: "Сгенерировать",
      },
    ],
  },
  {
    id: "copyUUID",
    type: "button",
    label: "Копировать ссылку",
    key: "deeplink",
    action: "custom",
    weight: 6,
    tooltip: "Копирование ссылки-deeplink",
  },
  {
    key: 'description',
    ignore: true,
  },
  {
    key: 'hideLabel',
    ignore: true,
  },
  {
    key: 'placeholder',
    ignore: true,
  },
  {
    key: 'placeholder',
    ignore: true,
  },
  {
    key: 'hidden',
    ignore: true,
  },
  {
    key: 'tableView',
    ignore: true,
  },
  {
    key: 'modalEdit',
    ignore: true,
  },
  {
    key: 'customClass',
    ignore: true,
  },
  {
    key: 'autofocus',
    ignore: true,
  },
  {
    key: 'tooltip',
    ignore: true,
  },
  {
    key: 'tabindex',
    ignore: true,
  },
  {
    key: 'disabled',
    ignore: true,
  },
];
