const { electronAPI } = window;

// Event listener for the settings button
const settingsButton = document.getElementById('settingsButton');
settingsButton.addEventListener('click', async () => {
  // Invoke the "selectDirectory" method using the exposed electronAPI
  const directoryPath = await electronAPI.selectDirectory(); // Make sure the property name is correct

  // Use the selected directory path in your app
  console.log('Selected directory:', directoryPath);
});
