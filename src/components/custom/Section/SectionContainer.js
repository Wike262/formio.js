import Templates from '../../../templates/Templates';
import editForm from './SectionContainer.form';
import panel from '../../panel/Panel';
import nested from '../../_classes/nested/NestedComponent';

function createSectionContainerTemplate(ctx) {
  const mytrackerEvent = JSON.stringify({ event: ctx.component.mytracker_event, payload: ctx.component.mytracker_properties });
  const styleTitle = `font-size: ${ctx.component.titleSize || 14}pt; font-weight: ${ctx.component.titleWeight || 700}; color:${
    ctx.component.titleColor || '#495671; margin: 0'
  };`;
  return `
    <div class="accordion__item" data-mytracker=${mytrackerEvent}>
      <div class="accordion__header">
       <p style=${JSON.stringify(styleTitle)}>${ctx.component.title}</p>
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
      document.querySelectorAll('.accordion__header')?.forEach((element) => {
        element.addEventListener('click', () => {
          this.component.collapsible
            ? element.parentElement?.parentElement?.querySelector('.accordion__body')?.classList.add('hide')
            : this.removeClass(element.parentElement?.parentElement?.querySelector('.accordion__body'), 'hide');
          const buttonCollapsing = element.querySelector('.button-collapsing');
          this.removeClass(buttonCollapsing, this.component.collapsible ? 'fa-angle-up' : 'fa-angle-down');
          buttonCollapsing?.classList.add(this.component.collapsible ? 'fa-angle-down' : 'fa-angle-up');
          this.component.collapsible = !this.component.collapsible;
        });
      });
    }
    if (document.getElementById('titleSetting')) {
      document.getElementById('titleSetting')?.firstElementChild?.classList.add('d-inline-flex');
    }
    return super.attach(element);
  }
}

// Components.addComponent('SectionContainer', SectionContainer);
