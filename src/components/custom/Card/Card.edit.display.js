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
    label: 'Заголовок',
    key: 'cardTitle',
    input: true,
    weight: 1,
    placeholder: 'Заголовок...',
    tooltip: 'Заголовок карточки',
  },
  {
    id: 'titleSetting',
    weight: 1,
    components: [
      {
        type: 'select',
        label: 'Жирность заголовка',
        key: 'titleWeight',
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
        label: 'Размер заголовка',
        key: 'titleSize',
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
        label: 'Цвет заголовка',
        key: 'titleColor',
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
    label: 'Описание',
    key: 'cardDescription',
    input: true,
    weight: 2,
    placeholder: 'Описание...',
    tooltip: 'Описание карточки',
  },
  {
    id: 'textSetting',
    weight: 3,
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
    weight: 4,
    components: [
      {
        id: 'customUploadImage',
        type: 'input',
        input: true,
        key: 'cardImage',
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
    type: 'input',
    label: 'Ссылка',
    key: 'cardWebview',
    input: true,
    weight: 5,
    placeholder: 'Ссылка...',
    tooltip: 'Вставьте ссылку',
  },
  {
    label: 'Уникальный идентификатор',
    weight: 6,
    tooltip: 'Вставьте уникальный идентификатор',
    components: [
      {
        id: 'inputUUID',
        input: true,
        key: 'customUUID',
        changeEvent: 'input',
        customClass: 'customInput',
        type: 'input',
        placeholder: 'UUID карточки...',
      },
      {
        id: 'createUUID',
        type: 'button',
        action: 'custom',
        customClass: 'inputButton',
        label: 'Сгенерировать',
      },
    ],
  },
  {
    id: 'copyUUID',
    type: 'button',
    label: 'Копировать ссылку',
    key: 'deeplink',
    action: 'custom',
    weight: 7,
    tooltip: 'Копирование ссылки-deeplink',
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