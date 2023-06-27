console.log(window);
// Event listener for the settings button
const settingsButton = document.getElementById('settingsButton');
settingsButton.addEventListener('click', () => {
  // Invoke the "selectDirectory" method using the exposed electronAPI
  // Make sure the property name is correct

  // Use the selected directory path in your app
  console.log('Selected directory:', os.homedir());
});
