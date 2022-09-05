import nestedComponentForm from '../../_classes/nested/NestedComponent.form';
import CardEditDisplay from './Card.edit.display';
import CardData from './Card.edit.data';

export default function(...extend) {
  return nestedComponentForm(
    [
      {
        key: 'display',
        components: CardEditDisplay,
      },
      {
        key: 'api',
        label: 'MyTracker',
        components: CardData,
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
