import Templates from '../../../templates/Templates';
import panel from '../../panel/Panel';
import nested from '../../_classes/nested/NestedComponent';
import editForm from './ServiceContainer.form';

function createServiceContainerTemplate(ctx) {
  if (ctx.component.serviceImage) {
    Object.assign(ctx.component.components[0], {
      serviceImage: ctx.component.serviceImage,
    });
  }
  return `
  <div class="containerServiceWrapper" ref="${ctx.nestedKey}">
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
      customClass: 'containerServiceWrapper',
      components: [
        { type: 'Slider', components: [] },
        { type: 'Sections', components: [] },
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

  constructor(...args) {
    super(...args);
    this.collapsed = !!this.component.collapsed;
    Templates.templates.bootstrap['ServiceContainer'] = { form: createServiceContainerTemplate };
    Templates.addCurrentTemplate('ServiceContainer', { form: createServiceContainerTemplate });
    Templates.addTemplate('ServiceContainer', { form: createServiceContainerTemplate });
  }

  attach(element) {
    document.querySelectorAll('.builder-component').forEach((element) => element.classList.add('marginNone'));
    document.querySelectorAll('.drag-container').forEach((element) => element.classList.add('paddingNone'));

    if (
      document.querySelector('.containerSlider') &&
      document.querySelector('.containerSlider').lastElementChild.firstElementChild.role !== 'alert'
  ) {
      document.querySelector('.containerSlider').firstElementChild.classList.add('cover');
      document.querySelector('.containerSlider').lastElementChild.classList.add('borderNone');
    }
    return super.attach(element);
  }
}

// Components.addComponent('ServiceContainer', ServiceContainer);
