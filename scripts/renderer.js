const optionsContainer = document.querySelector('.options-container1');
const button = document.getElementById('backButton');
const reactButton = document.getElementById('react');
const svelteButton = document.getElementById('svelte');
const vueButton = document.getElementById('vue');

const stepObj = {
  step: 1
};

const projectData = {
  projectName: '',
  choosenFramework: '',
  frameworkOfFramework: ''
};

const stepProxy = new Proxy(stepObj, {
  set: function (target, key, value) {
    if(value > 1) {
      makeFirstStepButtonHidden();
    } else {
      makeFirstStepButtonVisible();
    }
    
    target[key] = value;
    return true;
  }
});

button.addEventListener('click', () => {
  stepProxy.step = stepObj.step - 1
});

reactButton.addEventListener('click', () => {
  stepProxy.step = stepObj.step + 1

});

vueButton.addEventListener('click', () => {
  stepProxy.step = stepObj.step + 1

});

svelteButton.addEventListener('click', () => {
  stepProxy.step = stepObj.step + 1
});

function makeFirstStepButtonHidden () {
  button.classList.remove('hidden');
  svelteButton.style.display = 'none';
  vueButton.style.display = 'none';
  reactButton.style.display = 'none'
}

function makeFirstStepButtonVisible () {
  button.classList.add('hidden');
  svelteButton.style.display = 'block'
  vueButton.style.display = 'block'
  reactButton.style.display = 'block'
}