const optionsContainer = document.querySelector('.options-container1');
const button = document.getElementById('backButton');
const reactButton = document.getElementById('react');
const svelteButton = document.getElementById('svelte');
const vueButton = document.getElementById('vue');

const makeStepOneHidden = () => {
  button.classList.remove('hidden');
  svelteButton.classList.add('hidden');
  vueButton.classList.add('hidden');
  reactButton.classList.add('hidden');
}

const makeStepOneVisible = () => {
  button.classList.add('hidden');
  svelteButton.classList.remove('hidden');
  vueButton.classList.remove('hidden');
  reactButton.classList.remove('hidden');
}

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
      makeStepOneHidden();
    } else {
      makeStepOneVisible();
    }
    
    target[key] = value;
    return true;
  }
});

button.addEventListener('click', () => {
  stepProxy.step = stepObj.step - 1
});

reactButton.addEventListener('click', () => {
  console.log("clicknul na react");
  stepProxy.step = stepObj.step + 1

});

vueButton.addEventListener('click', () => {
  console.log("clicknul na vue");
  stepProxy.step = stepObj.step + 1

});

svelteButton.addEventListener('click', () => {
  console.log("clicknul na svelteButton");
  stepProxy.step = stepObj.step + 1
});





























// const loadContent = (page) => {
//   const mainContent = document.getElementById('main-content');
//   mainContent.innerHTML = '';
//   const iframe = document.createElement('iframe');
//   iframe.src = page;
//   iframe.style.width = '100%';
//   iframe.style.height = '100%';
//   iframe.style.border = 'none';
//   mainContent.appendChild(iframe);
// };

// const homeButton = document.getElementById('home');
// const projectInitializationButton = document.getElementById('projectInitialization');
// const settingsButton = document.getElementById('settings');

// projectInitializationButton.addEventListener("click", () => {
//   loadContent("project-initialization.html")
// })

// homeButton.addEventListener("click", () => {
//   loadContent("home.html")
// });

// settingsButton.addEventListener("click", () => {
//   loadContent("settings.html")
// });

// console.log('Selected directory:', os.homedir());

// // const sidebar = document.getElementById('sidebar');
// // let isDragging = false;
// // let startPosX = 0;
// // let currentPosX = 0;

// // Mouse events for dragging the sidebar
// // sidebar.addEventListener('mousedown', startDragging);
// // sidebar.addEventListener('mousemove', dragSidebar);
// // sidebar.addEventListener('mouseup', stopDragging);

// // function startDragging(e) {
// //   isDragging = true;
// //   startPosX = e.clientX || e.touches[0].clientX;
// // }

// // function dragSidebar(e) {
// //   if (!isDragging) return;

// //   const offsetX = e.clientX || e.touches[0].clientX;
// //   const deltaX = offsetX - startPosX;
// //   const newPosX = currentPosX + deltaX;

// //   sidebar.style.transform = `translateX(${newPosX}px)`;
// // }

// // function stopDragging() {
// //   isDragging = false;
// //   currentPosX = parseInt(sidebar.style.transform.replace(/[^0-9-]/g, ''), 10);
// // }
