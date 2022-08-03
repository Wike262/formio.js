import nestedComponentForm from '../../_classes/nested/NestedComponent.form';
import CardEditDisplay from './Card.edit.display';

export default function(...extend) {
  return nestedComponentForm(
    [
      {
        key: 'display',
        components: CardEditDisplay,
      },
      {
        key: 'api',
        ignore: true,
      },
      {
        key: 'conditional',
        ignore: true,
      },
      {
        key: 'logic',
        ignore: true,
      },
      {
        key: 'layout',
        ignore: true,
      },
      {
        key: 'addons',
        ignore: true,
      },
    ],
    ...extend
  );
}

