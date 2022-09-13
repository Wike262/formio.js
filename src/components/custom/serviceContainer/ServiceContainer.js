import Templates from '../../../templates/Templates';
import nested from '../../_classes/nested/NestedComponent';
import panel from '../../panel/Panel';
import editForm from './ServiceContainer.form';

function createServiceContainerTemplate(ctx) {
  const mytrackerEvent = JSON.stringify({ event: ctx.component.mytracker_event, payload: ctx.component.mytracker_properties });

  if (ctx.component.serviceImage || ctx.component.colorButton) {
    Object.assign(ctx.component.components[0], {
      serviceImage: ctx.component.serviceImage,
      colorButton: ctx.component.colorButton,
    });
  }

  return `
  <div class="container" ref="${ctx.nestedKey}" data-mytracker=${mytrackerEvent}>
    ${ctx.children}
  </div>
`;
}

export default class ServiceContainer extends panel {
  static editForm = editForm;

  get templateName() {
    return 'ServiceContainer';
  }

  static schema() {
    return nested.schema({
      label: 'Контейнер сервиса',
      type: 'ServiceContainer',
      key: 'ServiceContainer',
      customClass: 'container',
      components: [
        { type: 'Slider', key: 'Slider', components: [] },
        { type: 'Sections', key: 'Section', components: [] },
      ],
      input: false,
      persistent: false,
    });
  }

  static get builderInfo() {
    return {
      title: 'Сервис',
      icon: 'th-large',
      group: 'components',
      weight: 4,
      schema: ServiceContainer.schema(),
    };
  }

  constructor(component, options, data) {
    super(component, options, data);
    this.collapsed = !!this.component.collapsed;
    Templates.templates.bootstrap['ServiceContainer'] = { form: createServiceContainerTemplate };
  }
}

// Components.addComponent('ServiceContainer', ServiceContainer);
