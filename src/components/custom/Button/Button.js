import editForm from "./Button.form";
import field from '../../_classes/field/Field';

export default class Button extends field {
  static editForm = editForm;

  static schema() {
    return Components.components.field.schema({
      type: "button",
    });
  }

  static get builderInfo() {
    return {
      title: "Button",
      group: "components",
      icon: "stop",
      weight: 8,
      schema: Button.schema(),
    };
  }

  constructor(...props) {
    super(...props);
  }

  render() {
    const text = this.component.text ?? "";

    return super.render(`
      <div class=${this.component.colorButton ? "primary__button" : "white__button"}>
        ${
          this.component.link
            ? `   <a href=${this.component.link} class="${this.component.colorButton ? "white__text" : "primary__text"}">
              ${text}
               </a>`
            : `${text}`
        }

      </div>`);
  }

  attach(element) {
    return super.attach(element);
  }
}

// Components.addComponent("button", Button);
