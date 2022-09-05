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
    const mytrackerEvent = JSON.stringify({ event: this.component.mytracker_event, payload: this.component.mytracker_properties });

    const styleText = `font-size: ${this.component.textSize || 24}pt; font-weight: ${this.component.textWeight || 400}; color:${
      this.component.textColor || '#FFFFFF;'
    };`;

    return super.render(`<a class="picture__content" href=${this.component.picture__webview ?? '#'} data-mytracker=${mytrackerEvent}>
      <div class="picture__image" style="background-image: url(${this.component.picture__image})">
      <p class="picture__caption" style=${JSON.stringify(styleText)}> ${this.component.picture__caption ?? ''}</p>
      </div>
    </a>`);
  }

  attach(element) {
    if (document.getElementById('textSetting')) {
      document.getElementById('textSetting').firstElementChild.classList.add('d-inline-flex');
    }
    return super.attach(element);
  }
}

// Components.addComponent('pictureWithCaption', PictureWithCaption);
