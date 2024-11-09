// Function to gather all job links and iterate over each one
function visitJobListings() {
    const jobLinks = Array.from(document.querySelectorAll("a[href*='/job/']"));
    const jobUrls = jobLinks.map(link => link.href);
  
    // Open each job link one by one
    jobUrls.forEach((url, index) => {
      setTimeout(() => openJobTab(url), index * 5000); // Open a new job every 5 seconds
    });
  }
  
  // Function to open each job listing in a new tab and click Apply
  function openJobTab(url) {
    chrome.runtime.sendMessage({ action: 'openJobTab', url });
  }
  
  // Start the process by visiting job listings
  visitJobListings();