import { GlobalFormio as Formio } from '../../../Formio';
import { uuid } from 'uuid';

import FieldComponent from '../../_classes/field/Field';
import editForm from './Card.form';

const deeplinkService = 'ru.gid.app://service/form/';

export default class Card extends FieldComponent {
  constructor(component, options, data) {
    super(component, options, data);
  }

  static schema() {
    return FieldComponent.schema({
      type: "card",
    });
  }

  static editForm = editForm;

  static builderInfo = {
    title: "Карточка",
    group: "components",
    icon: "address-card",
    weight: 2,
    schema: Card.schema(),
  };

  attach(element) {
    const uuidElement = document.getElementById("createUUID");
    const uuidCopyElement = document.getElementById("copyUUID");

    if (uuidElement && this.component.id === element.id) {
      const uuidCreateElement = uuidElement.firstElementChild;

      document.getElementById("inputUUID").parentElement.classList.add("inputWithButton");
      uuidElement.addEventListener("click", () => {
        const UUID = uuid();
        const uuidInputElement = uuidCreateElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild;
        uuidInputElement.value = UUID;
        uuidInputElement.dispatchEvent(new Event("input", { bubbles: true, cancelable: false }));
        this.component.customUUID = UUID;
      });
    }
    if (uuidCopyElement && this.component.id === element.id) {
      uuidCopyElement.firstElementChild.addEventListener("click", () => {
        const deeplink = `${deeplinkService}${Formio.getProjectUrl()}${this.component.customUUID}`;

        navigator.clipboard.writeText(deeplink);
      });
      if (!this.component.customUUID) {
        uuidCopyElement.firstElementChild.setAttribute("disabled", true);
      }
    }

    return super.attach(element);
  }

  render() {
    const mytrackerEvent = JSON.stringify({ event: this.component.mytracker_event, payload: this.component.mytracker_properties });
    return super.render(`
    <a href=${this.component.cardWebview} class="link" data-mytracker=${mytrackerEvent} data-uuid=${this.component.customUUID}>
      <div class="card__content">
        ${
          this.component.cardImage
            ? `<img
                class="card__image"
                src=${this.component.cardImage}
              />`
            : ""
        }
        <div class="card__description">
            <p class="card__text_header">${this.component.cardTitle ?? ""}</p>
            <p class="card__text">${this.component.cardDescription ?? ""}</p>
        </div>
      </div>
    </a>
   `);
  }
}

// Components.addComponent("card", Card);
