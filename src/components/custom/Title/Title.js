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
    const styleTitle = `font-size: ${this.component.titleSize || 24}pt; font-weight: ${this.component.titleWeight || 500}; color:${
      this.component.titleColor || '#1B2C4E'
    };`;
    return super.render(`
      ${this.component.title ? `<div class="title" style=${JSON.stringify(styleTitle)}>${this.component.title}</div>` : ''}
   `);
  }

  attach(element) {
    if (document.getElementById('titleSetting')) {
      document.getElementById('titleSetting')?.firstElementChild?.classList.add('d-inline-flex');
    }
    return super.attach(element);
  }
}

// Components.addComponent('title', Title);
