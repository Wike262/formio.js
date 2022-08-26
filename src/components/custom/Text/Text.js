import editForm from './Text.form';
import field from '../../_classes/field/Field';

export default class Text extends field {
  static editForm = editForm;

  static schema() {
    return field.schema({
      type: 'text',
    });
  }

  static get builderInfo() {
    return {
      title: 'Текст',
      group: 'components',
      icon: 'font',
      weight: 6,
      schema: Text.schema(),
    };
  }

  constructor(...props) {
    super(...props);
  }

  render() {
    return super.render(`
      ${this.component.title ? `<div class="textTitle">${this.component.title}</div>` : ''}
      ${this.component.text ? `<div class="text">${this.component.text}</div>` : ''}
   `);
  }

  attach(element) {
    return super.attach(element);
  }
}

// Components.addComponent("text", Text);
