import editForm from './Image.form';
import field from '../../_classes/field/Field';

export default class Image extends field {
  static editForm = editForm;

  static schema() {
    return field.schema({
      type: 'image',
    });
  }

  static get builderInfo() {
    return {
      title: 'Изображение',
      group: 'components',
      icon: 'image',
      weight: 7,
      schema: Image.schema(),
    };
  }

  constructor(...props) {
    super(...props);
  }

  render() {
    return super.render(`
       ${this.component.uploaderInput ? `<img class="image" src=${this.component.uploaderInput} /> ` : ''}
    `);
  }

  attach(element) {
    if (this.component.id === element.id) {
      document.getElementById('customUploadImage').parentElement.classList.add('inputWithButton');
    }

    return super.attach(element);
  }
}

// Components.addComponent("image", Image);
