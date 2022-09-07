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
            src='https://test-gidapp.k8s-dev.gid.team/storage/public/c6bfd484-7a8e-43cd-b1ea-48570bff2301.png'
            alt='Назад'
          />
        </div>

       <div class='serviceName'>
          ${
          ctx.component.uploaderInput
              ? `<img
                    class='serviceIcon'
                    alt='serviceName'
                    src=${ctx.component.uploaderInput}
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

  attach(element) {
    if (!this.component.components.length && document.querySelector('.containerSlider .drag-container')) {
      document.querySelector('.containerSlider .drag-container')?.firstElementChild?.classList.add('no-drag-custom');
    }

    if (this.component.id === element.id) {
      document.getElementById('customUploadImage').parentElement.classList.add('inputWithButton');
    }

    const updateImageButton = document.getElementById('updateImageButton');
    if (updateImageButton) {
      updateImageButton.onclick = () => {
        const input = document.getElementById('customUploadImage-uploaderInput');
        const inputValue = input.value;
        input.dispatchEvent(new Event('input', { bubbles: true, cancelable: false }));
        this.component.uploaderInput = inputValue;
      };
    }

    document
      .getElementById('containerSlider')
      ?.firstElementChild?.firstElementChild?.firstElementChild?.classList.add('padding-top-for-setting');

    return super.attach(element);
  }
}

// Components.addComponent("Slider", Slider);
