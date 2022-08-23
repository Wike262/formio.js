import nestedComponentForm from '../../_classes/nested/NestedComponent.form';
import ServiceContainer from './ServiceContainer.edit.display';
import ServiceContainerData from './ServiceContainer.edit.data';

export default function(...extend) {
  return nestedComponentForm(
    [
      {
        key: 'display',
        components: ServiceContainer,
      },
      {
        key: 'api',
        label: 'MyTracker',
        components: ServiceContainerData,
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
