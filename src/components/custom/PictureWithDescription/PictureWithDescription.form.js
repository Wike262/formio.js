import nestedComponentForm from '../../_classes/nested/NestedComponent.form';
import PictureWithCaption from './PictureWithCaption.edit.display';
import PictureWithCaptionData from './PictureWithCaption.edit.data';

export default function(...extend) {
  return nestedComponentForm(
    [
      {
        key: 'display',
        components: PictureWithCaption,
      },
      {
        key: 'api',
        label: 'MyTracker',
        components: PictureWithCaptionData,
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
