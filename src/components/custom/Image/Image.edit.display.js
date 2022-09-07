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
    key: 'description',
    ignore: true,
  },
  {
    key: 'hideLabel',
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
    label: 'Изображение',
    weight: 1,
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
];
