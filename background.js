
// The background script handles the main logic, including initiating the autofill process across different job application websites.

let applying = false;

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'startApplyProcess') {
    openJobsPage('https://spe.wd1.myworkdayjobs.com/en-US/SonyPicturesEntertainment/jobs');
  }
});

// Function to open the jobs page and inject the navigation script
function openJobsPage(url) {
  chrome.tabs.create({ url, active: true }, (tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['navigateListings.js']
    });
  });
}




// Sample autofill function that iterates over a list of jobs and fills applications
async function applyToJobs() {
  if (!applying) return;

  // Placeholder job sites array
  const jobSites = ["https://example.com/apply", "https://anotherjob.com/apply"];
  
  for (const site of jobSites) {
    if (!applying) break; // Stop if user stops the autofill

    // Here we would add logic to open a tab and autofill form data
    chrome.tabs.create({ url: site, active: false }, (tab) => {
      // Send a message to the content script to start filling out the form
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["utils/dateUtils.js", "contentScript.js"]
      });
    });
  }
}
