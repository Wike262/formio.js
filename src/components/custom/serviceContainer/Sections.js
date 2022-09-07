import Templates from '../../../templates/Templates';
import panel from '../../panel/Panel';
import nested from '../../_classes/nested/NestedComponent';
import editForm from './ServiceContainer.form';

function createSectionsTemplate(ctx) {
  return `
      <div
        ref="${ctx.nestedKey}"
        class="serviceSections"
      >
        ${ctx.children}
      </div>
  `;
}

export default class Sections extends panel {
  static editForm = editForm;

  get templateName() {
    return 'Sections';
  }

  static schema() {
    return nested.schema({
      label: 'Контейнер сервиса',
      type: 'Sections',
      key: 'Sections',
      components: [],
      input: false,
      persistent: false,
    });
  }

  constructor(component, options, data) {
    super(component, options, data);
    this.collapsed = !!this.component.collapsed;
    Templates.templates.bootstrap['Sections'] = { form: createSectionsTemplate };
  }

  attach(element) {
    if (document.querySelector('.serviceSections')?.firstElementChild) {
      document.querySelector('.serviceSections')?.firstElementChild?.classList.add('drag-container-section');
    }

    if (document.querySelector('.preview-panel')) {
      element.querySelector('.serviceSections')?.classList.add('service-sections-preview');
      element.querySelector('.serviceSections')?.parentElement?.classList.add('formio-component-Sections-preview');
    }

    document.querySelector('.serviceSections')?.parentElement?.parentElement?.classList.add('position-absolute');
    return super.attach(element);
  }
}

// Components.addComponent("Sections", Sections);

