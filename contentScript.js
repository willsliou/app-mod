// Example autofill function for job application form fields
function autofillForm() {
    document.querySelector("input[name='fullName']").value = "Wills Liou";
    document.querySelector("input[name='email']").value = "willsliou@berkeley.edu";
    document.querySelector("input[name='phone']").value = "9257199559";
    document.querySelector("textarea[name='coverLetter']").value = "I am very interested in this role...";
    // Add additional fields as needed
  }
  
  // Listen for message from background script to trigger autofill
  chrome.runtime.onMessage.addListener((message) => {
    if (message.action === 'autofill') {
      autofillForm();
    }
  });
