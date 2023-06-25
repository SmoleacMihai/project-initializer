const loadContent = (page) => {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.src = page;
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  mainContent.appendChild(iframe);
}