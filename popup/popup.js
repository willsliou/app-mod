// Event listeners for starting and stopping the autofill feature
document.getElementById('start-apply').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'startApply' });
  });
  
  document.getElementById('stop-apply').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'stopApply' });
  });
  
  // Display status updates from the background script
  chrome.runtime.onMessage.addListener((message) => {
    if (message.status) {
      document.getElementById('status').innerText = message.status;
    }
  });
  