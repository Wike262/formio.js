import Templates from '../../../templates/Templates';
import nested from '../../_classes/nested/NestedComponent';
import panel from '../../panel/Panel';
import editForm from './ServiceContainer.form';

function createSliderTemplate(ctx) {
  return `
    <div ref="${ctx.nestedKey}" class="containerSlider" id="containerSlider">
     ${ctx.children}
      <div class="containerNavbar">
       <div class=${ctx.component.colorButton ? 'backIconWithBackground' : 'backIcon'}>
          <img
            src='https://app.gid.ru/storage/public/4968e579-b051-49fb-b0f3-ecc4af4057ae.png'
            alt='Назад'
          />
        </div>

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
      input: true,
      persistent: false,
    });
  }

  constructor(component, options, data) {
    super(component, options, data);
    Templates.templates.bootstrap['Slider'] = { form: createSliderTemplate };
  }
}

// Components.addComponent("Slider", Slider);