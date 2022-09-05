import { fontSizeOptions, fontWeightOptions } from '../constants/constants';

export default [
  {
    key: 'labelPosition',
    ignore: true,
  },
  {
    key: 'placeholder',
    ignore: true,
  },
  {
    key: 'description',
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
    key: 'hidden',
    ignore: true,
  },
  {
    key: 'hideLabel',
    ignore: true,
  },
  {
    key: 'tabindex',
    ignore: true,
  },
  {
    key: 'tableView',
    ignore: true,
  },
  {
    key: 'disabled',
    ignore: true,
  },
  {
    key: 'label',
    hidden: true,
    calculateValue(context) {
      return context.data.title;
    },
  },
  {
    key: 'tabindex',
    hidden: true,
  },
  {
    weight: 1,
    type: 'textfield',
    input: true,
    placeholder: 'Заголовок раздела',
    label: 'Заголовок раздела',
    key: 'title',
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
    weight: 2,
    type: 'checkbox',
    label: 'Initially Collapsed',
    tooltip: 'Determines the initial collapsed state of this Panel.',
    key: 'collapsed',
    input: true,
    conditional: {
      json: { '===': [{ var: 'data.collapsible' }, true] },
    },
  },
];
