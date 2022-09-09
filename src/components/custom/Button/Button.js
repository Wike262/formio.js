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

  attach(element) {
    element.classList.add('buttonPosition');
    const buttons = Array.from(element.parentElement.querySelectorAll('.buttonPosition'));
    if (buttons.length > 1) {
      const buttonLength = 56;
      buttons.map((button, index) => {
        if (index + 1 !== buttons.length) {
          button.style.marginBottom = `${buttonLength * (buttons.length - index - 1)}px`;
        }
      });
    }
    return super.attach(element);
  }
}

// Components.addComponent('button', Button);
