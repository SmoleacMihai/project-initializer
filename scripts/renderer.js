const optionsContainer = document.querySelector('.options-container1');
const button = document.getElementById('backButton');
const reactButton = document.getElementById('react');
const svelteButton = document.getElementById('svelte');
const vueButton = document.getElementById('vue');
const nextButton = document.getElementById('nextjs');
const dialogButton = document.getElementById('dialog');

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

const makeStepTwoVisible = () => {}

const projectData = {
  projectName: '',
  choosenFramework: '',
  frameworkOfFramework: '',
  step: 1,
  incrementStep () {
    this.step = this.step + 1
  },
  decrementStep () {
    this.step = this.step - 1
  },
  setProjectName (projectName) {
    this.projectName = projectName
  },
  setChoosenFramework (choosenFramework) {
    this.choosenFramework = choosenFramework
  },
};

const projectDataProxy = new Proxy(projectData, {
  set: function (target, key, value) {
    console.log(value);
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
  projectDataProxy.decrementStep();
  projectDataProxy.setProjectName('');
});

reactButton.addEventListener('click', () => {
  projectDataProxy.incrementStep();
});

vueButton.addEventListener('click', () => {
  projectDataProxy.incrementStep();
});

svelteButton.addEventListener('click', () => {
  projectDataProxy.incrementStep();
});

console.log(electronAPI);
dialogButton.addEventListener('click', () => {
  const directoryPath = electronAPI?.selectDirectory();
  
  if (directoryPath) {
    // Directory path is selected, do something with it
    console.log('Selected directory:', directoryPath);
  } else {
    // No directory is selected or selection is cancelled
    console.log('No directory selected.');
  }
})
























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
