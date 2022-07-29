import Templates from '../../../templates/Templates';
import panel from '../../panel/Panel';
import nested from '../../_classes/nested/NestedComponent';
import editForm from './ServiceContainer.form';

function createSliderTemplate(ctx) {
  return `
    <div ref="${ctx.nestedKey}" class="containerSlider">
      <div class="containerNavbar">
        <img
          src='https://test-gidapp.k8s-dev.gid.team/storage/public/c6bfd484-7a8e-43cd-b1ea-48570bff2301.png'
          alt='Назад'
          class='backIcon'
        />
        <div class='serviceName'>
          ${
    ctx.component.serviceImage
      ? `<img
            class='serviceIcon'
            alt='serviceName'
            src=${ctx.component.serviceImage}
          />`
      : ''
  }
        </div>
      </div>
      ${ctx.children}
    </div>
`;
}

export default class Slider extends panel {
  static editForm = editForm;

  get templateName() {
    return 'Slider';
  }

  static schema() {
    return nested.schema({
      label: 'Контейнер сервиса',
      type: 'Slider',
      key: 'Slider',
      components: [],
      input: false,
      persistent: false,
    });
  }

  constructor(component, options, data) {
    super(component, options, data);
    this.collapsed = !!this.component.collapsed;
    Templates.templates.bootstrap['Slider'] = { form: createSliderTemplate };
    Templates.addCurrentTemplate('Slider', { form: createSliderTemplate });
    Templates.addTemplate('Slider', { form: createSliderTemplate });
  }
}

// Components.addComponent("Slider", Slider);
