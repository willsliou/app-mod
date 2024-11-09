document.getElementById('saveOptions').addEventListener('click', () => {
    const name = document.getElementById('defaultName').value;
    chrome.storage.sync.set({ defaultName: name }, () => {
      alert('Options saved.');
    });
  });
  