export default [
  {
    key: 'multiple',
    ignore: true,
  },
  {
    key: 'allowCalculateOverride',
    ignore: true,
  },
  {
    key: 'defaultValue',
    ignore: true,
  },
  {
    key: 'tags',
    ignore: true,
  },
  {
    key: 'properties',
    ignore: true,
  },
  {
    key: 'key',
    ignore: true,
  },
  {
    type: 'input',
    label: 'Наименование события',
    key: 'mytracker_event',
    input: true,
    weight: 1,
    placeholder: 'Событие...',
    tooltip: 'Наименование события для MyTracker',
  },
  {
    type: 'datamap',
    label: 'Параметры события',
    key: 'mytracker_properties',
    input: true,
    weight: 2,
    placeholder: 'Событие...',
    tooltip: 'Наименование события для MyTracker',
  },
];
