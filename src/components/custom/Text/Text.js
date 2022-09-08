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
    const styleTitle = `font-size: ${this.component.titleSize || 14}pt; font-weight: ${this.component.titleWeight || 700}; color:${
      this.component.titleColor || '#1B2C4E'
    };`;

    const styleText = `font-size: ${this.component.textSize || 18}pt; font-weight: ${this.component.textWeight || 500}; color:${
      this.component.textColor || '#1B2C4E'
    };`;
    return super.render(`
      ${this.component.title ? `<p class="textTitle" style=${JSON.stringify(styleTitle)}>${this.component.title}</p>` : ''}
      ${this.component.text ? `<p class="text" style=${JSON.stringify(styleText)}>${this.component.text}</p>` : ''}
   `);
  }
}

// Components.addComponent("text", Text);
