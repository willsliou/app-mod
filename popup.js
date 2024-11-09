// popup.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('userForm');
  const status = document.getElementById('status');

  // Load existing data
  chrome.storage.local.get(['userData'], (result) => {
      if (result.userData) {
          form.firstName.value = result.userData.firstName || '';
          form.lastName.value = result.userData.lastName || '';
          // Populate other fields
      }
  });

  // Handle form submission
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const userData = {
          firstName: form.firstName.value,
          lastName: form.lastName.value,
          // Add other fields
      };

      chrome.storage.local.set({ userData }, () => {
          if (chrome.runtime.lastError) {
              status.textContent = 'Error saving data.';
          } else {
              status.textContent = 'Data saved successfully!';
              setTimeout(() => { status.textContent = ''; }, 2000);
          }
      });
  });
});
