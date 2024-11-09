// content.js

// Function to get user data from chrome.storage
function getUserData() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['userData'], (result) => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(result.userData);
            }
        });
    });
}

// Function to fill form fields
function fillForm(userData) {
    // Example: Fill first name
    const firstNameField = document.querySelector('input[name="firstName"]');
    if (firstNameField) {
        firstNameField.value = userData.firstName || '';
    }

    // Fill last name
    const lastNameField = document.querySelector('input[name="lastName"]');
    if (lastNameField) {
        lastNameField.value = userData.lastName || '';
    }

    // Continue for other fields...
    // You need to inspect the Workday form to get accurate selectors
}

// Observe changes in the DOM to handle multi-page forms
const observer = new MutationObserver((mutations, obs) => {
    // Check if the current page is a form page
    if (document.querySelector('form')) {
        getUserData().then((userData) => {
            fillForm(userData);
        }).catch((error) => {
            console.error('Error fetching user data:', error);
        });
    }
});

// Start observing
observer.observe(document.body, {
    childList: true,
    subtree: true
});
