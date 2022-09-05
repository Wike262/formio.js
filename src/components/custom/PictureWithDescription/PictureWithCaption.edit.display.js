import { fontSizeOptions, fontWeightOptions } from '../constants/constants';

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
    label: 'Изображение',
    key: 'picture__image',
    input: true,
    weight: 1,
    placeholder: 'Ссылка...',
    tooltip: 'Вставьте ссылку на изображение',
  },
  {
    type: 'input',
    label: 'Описание',
    key: 'picture__caption',
    input: true,
    weight: 2,
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
    type: 'input',
    label: 'Ссылка на webview',
    key: 'picture__webview',
    input: true,
    weight: 3,
    placeholder: 'Ссылка...',
    tooltip: 'Введите ссылку на webview',
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
