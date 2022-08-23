import Templates from '../../../templates/Templates';
import editForm from './SectionContainer.form';
import panel from '../../panel/Panel';
import nested from '../../_classes/nested/NestedComponent';

function createSectionContainerTemplate(ctx) {
  const mytrackerEvent = JSON.stringify({ event: ctx.component.mytracker_event, payload: ctx.component.mytracker_properties });

  return `
    <div class="accordion__item" data-mytracker=${mytrackerEvent}>
      <div class="accordion__header">
        ${ctx.component.title}
        <i
          class="button-collapsing formio-collapse-icon button__collapsing ${ctx.iconClass(
    ctx.collapsed ? 'angle-down' : 'angle-up'
  )}" data-title="Collapse Panel" id="collapsing"></i>
      </div>
      <div
        class="accordion__body ${ctx.collapsed ? 'hide' : ''}"
        ref="${ctx.nestedKey}"
      >
        ${ctx.children}
      </div>
    </div>
`;
}

export default class SectionContainer extends panel {
  static editForm = editForm;

  constructor(component, options, data) {
    super(component, options, data);
    this.collapsed = !!this.component.collapsed;
    Templates.templates.bootstrap['SectionContainer'] = { form: createSectionContainerTemplate };
  }

  get templateName() {
    return 'SectionContainer';
  }

  static schema(...extend) {
    return nested.schema(
      {
        label: 'Контейнер раздела',
        type: 'SectionContainer',
        key: 'SectionContainer',
        title: 'Раздел',
        theme: 'default',
        breadcrumb: 'default',
        components: [],
        clearOnHide: false,
        input: false,
        tableView: false,
        persistent: false,
        collapsible: true,
      },
      ...extend
    );
  }

  static get builderInfo() {
    return {
      title: 'Раздел',
      icon: 'list-alt',
      group: 'components',
      weight: 5,
      schema: SectionContainer.schema(),
    };
  }

  attach(element) {
    if (document.querySelector('.accordion__header')) {
      document.querySelectorAll('.accordion__header').forEach((element) => {
        element.addEventListener('click', () => {
          const elem = element.parentElement.querySelector('.accordion__body');
          const hide = element.parentElement.querySelector('.accordion__body').classList.contains('hide');
          const buttonCollapsing = element.querySelector('.button-collapsing');

          if (hide) {
            elem.classList.remove('hide');
            this.removeClass(buttonCollapsing, 'fa-angle-down');
            buttonCollapsing.classList.add('fa-angle-up');
          }
          else {
            elem.classList.add('hide');
            this.removeClass(buttonCollapsing, 'fa-angle-up');
            buttonCollapsing.classList.add('fa-angle-down');
          }
          // this.component.collapsible
          //   ? element.parentElement.querySelector('.accordion__body').classList.add('hide')
          //   : this.removeClass(element.parentElement.querySelector('.accordion__body'), 'hide');
          // buttonCollapsing.classList.add(this.component.collapsible ? 'fa-angle-down' : 'fa-angle-up');
          // this.component.collapsible = !this.component.collapsible;
        });
      });
    }
    return super.attach(element);
  }
}

// Components.addComponent('SectionContainer', SectionContainer);
