import editForm from './Separator.form';
import field from '../../_classes/field/Field';

export default class Separator extends field {
  constructor(component, options, data) {
    super(component, options, data);
  }

  static schema() {
    return field.schema({
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
    return super.render('<hr />');
  }

  attach(element) {
    return super.attach(element);
  }
}

// Components.addComponent("separator", Separator);
