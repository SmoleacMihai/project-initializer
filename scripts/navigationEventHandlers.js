const loadContent = (page) => {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.src = page;
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  mainContent.appendChild(iframe);
};

const homeButton = document.getElementById('home');
const projectInitializationButton = document.getElementById('projectInitialization');

projectInitializationButton.addEventListener("click", () => {
  loadContent("project-initialization.html")
})

homeButton.addEventListener("click", () => {
  loadContent("home.html")
});

const sidebar = document.getElementById('sidebar');
let isDragging = false;
let startPosX = 0;
let currentPosX = 0;

// Mouse events for dragging the sidebar
sidebar.addEventListener('mousedown', startDragging);
sidebar.addEventListener('mousemove', dragSidebar);
sidebar.addEventListener('mouseup', stopDragging);

function startDragging(e) {
  isDragging = true;
  startPosX = e.clientX || e.touches[0].clientX;
}

function dragSidebar(e) {
  if (!isDragging) return;

  const offsetX = e.clientX || e.touches[0].clientX;
  const deltaX = offsetX - startPosX;
  const newPosX = currentPosX + deltaX;

  sidebar.style.transform = `translateX(${newPosX}px)`;
}

function stopDragging() {
  isDragging = false;
  currentPosX = parseInt(sidebar.style.transform.replace(/[^0-9-]/g, ''), 10);
}
