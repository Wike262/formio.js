export default [
  {
    key: 'labelPosition',
    ignore: true,
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
  {
    key: 'label',
    ignore: true,
  },
  {
    label: 'Изображение сервиса',
    weight: 2,
    components: [
      {
        id: 'customUploadImage',
        type: 'input',
        input: true,
        key: 'uploaderInput',
        customClass: 'uploaderInput',
        placeholder: 'Ссылка...',
      },
      {
        id: 'uploaderButton',
        type: 'button',
        customClass: 'inputButton',
        action: 'custom',
        label: 'Загрузить',
      },
      {
        id: 'updateImageButton',
        type: 'button',
        action: 'custom',
        changeEvent: 'click',
        customClass: 'inputButton',
        label: 'Обновить',
      },
    ],
  },
  {
    type: 'checkbox',
    label: 'Серый фон кнопки «Назад»',
    key: 'colorButton',
    input: true,
    weight: 3,
    placeholder: 'Фон...',
    tooltip: 'Выберите фон',
  },
];
