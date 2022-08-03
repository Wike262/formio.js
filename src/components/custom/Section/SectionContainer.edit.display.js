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
    weight: 651,
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
