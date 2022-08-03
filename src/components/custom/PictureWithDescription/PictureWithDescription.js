import editForm from './PictureWithDescription.form';
import FieldComponent from '../../_classes/field/Field';

export default class PictureWithCaption extends FieldComponent {
  constructor(component, options, data) {
    super(component, options, data);
  }

  static schema() {
    return FieldComponent.schema({
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
      <p class="picture__caption"> ${this.component.picture__caption ?? ''}</p>
      </div>
    </a>`);
  }

  attach(element) {
    return super.attach(element);
  }
}

// Components.addComponent('pictureWithCaption', PictureWithCaption);
