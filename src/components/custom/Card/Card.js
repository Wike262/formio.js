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
    return super.render(`
    <a href=${this.component.cardWebview} class="link">
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
            <p class="card__text_header">${this.component.cardTitle ?? ''}</p>
            <p class="card__text">${this.component.cardDescription ?? ''}</p>
        </div>
      </div>
    </a>
   `);
  }

  attach(element) {
    return super.attach(element);
  }
}

// Components.addComponent("card", Card);
