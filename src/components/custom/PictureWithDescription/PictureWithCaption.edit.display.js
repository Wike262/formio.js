import { fontSizeOptions, fontWeightOptions } from '../../constants';

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
    label: 'Описание',
    key: 'picture__caption',
    input: true,
    weight: 1,
    placeholder: 'Описание...',
    tooltip: 'Подпись к картинке',
  },
  {
    id: 'textSetting',
    weight: 2,
    components: [
      {
        type: 'select',
        label: 'Жирность текста',
        key: 'textWeight',
        customClass: 'col-4',
        search: false,
        input: true,
        placeholder: 'Жирность...',
        searchEnabled: false,
        dataSrc: 'values',
        data: {
          values: fontWeightOptions,
        },
      },
      {
        type: 'select',
        label: 'Размер текста',
        key: 'textSize',
        customClass: 'col-4',
        search: false,
        input: true,
        placeholder: 'Размер...',
        searchEnabled: false,
        dataSrc: 'values',
        data: {
          values: fontSizeOptions,
        },
      },
      {
        type: 'input',
        label: 'Цвет текста',
        key: 'textColor',
        customClass: 'col-4',
        input: true,
        inputMask: '#******',
        displayMask: '#******',
        placeholder: 'Цвет...',
        tooltip: 'Введите код цвета в формате #B0B0B0',
      },
    ],
  },
  {
    label: 'Изображение',
    weight: 3,
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
