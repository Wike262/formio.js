import nestedComponentForm from '../../_classes/nested/NestedComponent.form';
import Button from './Button.edit.display';
import ButtonData from './Button.edit.data';

export default function(...extend) {
  return nestedComponentForm(
    [
      {
        key: 'display',
        components: Button,
      },
      {
        key: 'api',
        label: 'MyTracker',
        components: ButtonData,
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
