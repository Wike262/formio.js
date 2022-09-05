import FieldComponent from '../../_classes/field/Field';
import editForm from './Card.form';

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

  render() {
    const mytrackerEvent = JSON.stringify({ event: this.component.mytracker_event, payload: this.component.mytracker_properties });

    const styleTitle = `font-size: ${this.component.titleSize || 14}pt; font-weight: ${this.component.titleWeight || 700}; color:${
      this.component.titleColor || '#1B2C4E'
    };`;

    const styleText = `font-size: ${this.component.textSize || 18}pt; font-weight: ${this.component.textWeight || 500}; color:${
      this.component.textColor || '#1B2C4E'
    };`;

    return super.render(`
    <a href=${this.component.cardWebview} class="link" data-mytracker=${mytrackerEvent} data-uuid=${this.component.customUUID}>
      <div class="card__content">
        ${
      this.component.cardImage
        ? `<img
                class="card__image"
                src=${this.component.cardImage}
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
