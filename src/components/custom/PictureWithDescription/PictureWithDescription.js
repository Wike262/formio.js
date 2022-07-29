import editForm from './PictureWithDescription.form';
import field from '../../_classes/field/Field';

export default class PictureWithCaption extends field {
  constructor(component, options, data) {
    super(component, options, data);
  }

  static schema() {
    return field.schema({
      type: 'pictureWithCaption',
    });
  }

  static editForm = editForm;

  static builderInfo = {
    title: 'Картинка с подписью',
    group: 'components',
    icon: 'image',
    weight: 3,
    schema: PictureWithCaption.schema(),
  };

  render() {
    return super.render(`<a class="picture__content" href=${this.component.picture__webview ?? '#'}>
      <div class="picture__image" style="background-image: url(${this.component.picture__image})">
      </div>
    </a>`);
  }

  attach(element) {
    return super.attach(element);
  }
}

// Components.addComponent('pictureWithCaption', PictureWithCaption);
