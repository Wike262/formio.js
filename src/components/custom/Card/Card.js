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
      type: 'card',
    });
  }

  static editForm = editForm;

  static builderInfo = {
    title: 'Карточка',
    group: 'components',
    icon: 'address-card',
    weight: 2,
    schema: Card.schema(),
  };

  attach(element) {
    const uuidElement = document.getElementById('createUUID');
    const uuidCopyElement = document.getElementById('copyUUID');

    if (uuidElement && this.component.id === element.id) {
      const uuidCreateElement = uuidElement.firstElementChild;

      document.getElementById('customUploadImage').parentElement.classList.add('inputWithButton');
      document.getElementById('inputUUID').parentElement.classList.add('inputWithButton');
      uuidElement.addEventListener('click', () => {
        const UUID = uuid();
        const uuidInputElement = uuidCreateElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild;
        uuidInputElement.value = UUID;
        uuidInputElement.dispatchEvent(new Event('input', { bubbles: true, cancelable: false }));
        this.component.customUUID = UUID;
      });
    }

    if (uuidCopyElement && this.component.id === element.id) {
      uuidCopyElement.firstElementChild.addEventListener('click', () => {
        const deeplink = `${deeplinkService}${Formio.getProjectUrl()}${this.component.customUUID}`;
        navigator.clipboard.writeText(deeplink);
      });
      if (!this.component.customUUID) {
        uuidCopyElement.firstElementChild.setAttribute('disabled', true);
      }
    }

    const updateImageButton = document.getElementById('updateImageButton');
    if (updateImageButton) {
      updateImageButton.onclick = () => {
        const input = document.getElementById('customUploadImage-uploaderInput');
        const inputValue = input.value;
        input.dispatchEvent(new Event('input', { bubbles: true, cancelable: false }));
        this.component.uploaderInput = inputValue;
      };
    }

    if (document.getElementById('titleSetting')) {
      document.getElementById('titleSetting').firstElementChild?.classList.add('d-inline-flex');
      document.getElementById('textSetting').firstElementChild?.classList.add('d-inline-flex');
    }

    return super.attach(element);
  }

  render() {
    const mytrackerEvent = JSON.stringify({ event: this.component.mytracker_event, payload: this.component.mytracker_properties });

    const styleTitle = `font-size: ${this.component.titleSize || 14}pt; font-weight: ${this.component.titleWeight || 700}; color:${
      this.component.titleColor || '#1B2C4E'
    };`;

    const styleText = `font-size: ${this.component.textSize || 12}pt; font-weight: ${this.component.textWeight || 700}; color:${
      this.component.textColor || '#1B2C4E'
    };`;

    return super.render(`
    <a href=${this.component.cardLink} class="link" data-mytracker=${mytrackerEvent} data-uuid=${this.component.customUUID}>
      <div class="card__content">
        ${
      this.component.uploaderInput
        ? `<img
                class="card__image"
                src=${this.component.uploaderInput}
              />`
        : ''
    }
        <div class="card__description">
            <p class="card__text_header" style=${JSON.stringify(styleTitle)}>${this.component.cardTitle ?? ''}</p>
            <p class="card__text" style=${JSON.stringify(styleText)}>${this.component.cardDescription ?? ''}</p>
        </div>
      </div>
    </a>
   `);
  }
}

// Components.addComponent("card", Card);
