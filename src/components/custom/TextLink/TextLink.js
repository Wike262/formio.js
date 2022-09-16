import editForm from './TextLink.form';
import field from '../../_classes/field/Field';

export default class TextLink extends field {
  static editForm = editForm;

  static schema() {
    return field.schema({
      type: 'textLink',
    });
  }

  static get builderInfo() {
    return {
      title: 'Ссылка в тексте',
      group: 'components',
      icon: 'link',
      weight: 7,
      schema: TextLink.schema(),
    };
  }

  constructor(...props) {
    super(...props);
  }

  render() {
    const styleText = `font-size: ${this.component.textSize || 18}px; font-weight: ${this.component.textWeight || 500}; color:${
      this.component.textColor || '#3174F6'
    };`;
    return super.render(`
      ${
      this.component.text ? `<a href=${this.component.textLink ?? '#'} style=${JSON.stringify(styleText)}>${this.component.text}</a>` : ''
    }
   `);
  }
}

// Components.addComponent("textLink", TextLink);
