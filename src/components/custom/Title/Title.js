import editForm from './Title.form';
import field from '../../_classes/field/Field';

export default class Title extends field {
  static editForm = editForm;

  static schema() {
    return field.schema({
      type: 'title',
    });
  }

  static get builderInfo() {
    return {
      title: 'Заголовок',
      group: 'components',
      icon: 'header',
      weight: 7,
      schema: Title.schema(),
    };
  }

  constructor(...props) {
    super(...props);
  }

  render() {
    return super.render(`
      ${this.component.title ? `<div class="title">${this.component.title}</div>` : ''}
   `);
  }

  attach(element) {
    return super.attach(element);
  }
}

// Components.addComponent('title', Title);
