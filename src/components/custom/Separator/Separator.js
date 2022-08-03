import FieldComponent from '../../_classes/field/Field';
import editForm from './Separator.form';

export default class Separator extends FieldComponent {
  constructor(component, options, data) {
    super(component, options, data);
  }

  static schema() {
    return FieldComponent.schema({
      type: 'separator',
    });
  }

  static editForm = editForm;

  static builderInfo = {
    title: 'Разделитель',
    group: 'components',
    icon: 'minus',
    weight: 1,
    schema: Separator.schema(),
  };

  render() {
    return super.render("<hr class='separator'/>");
  }

  attach(element) {
    return super.attach(element);
  }
}

// Components.addComponent('separator', Separator);
