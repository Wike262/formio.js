import editForm from './Button.form';
import field from '../../_classes/field/Field';

export default class Button extends field {
  static editForm = editForm;

  static schema() {
    return field.schema({
      type: 'customButton',
    });
  }

  static get builderInfo() {
    return {
      title: 'Button',
      group: 'components',
      icon: 'stop',
      weight: 8,
      schema: Button.schema(),
    };
  }

  constructor(...props) {
    super(...props);
  }

  render() {
    const text = this.component.text ?? '';
    const mytrackerEvent = JSON.stringify({ event: this.component.mytracker_event, payload: this.component.mytracker_properties });

    return super.render(`
      <div  data-mytracker=${mytrackerEvent} class=${this.component.colorButton ? 'primary__button' : 'white__button'}>
        ${
      this.component.link
        ? `<a href=${this.component.link} class="${this.component.colorButton ? 'white__text' : 'primary__text'}">
              ${text}
            </a>`
        : `<p class="${this.component.colorButton ? 'white__text' : 'primary__text'}">${text}</p>`
    }

      </div>`);
  }
}

// Components.addComponent('button', Button);
