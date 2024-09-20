let refreshInterval;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "startRefresh") {
    if (refreshInterval) clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.reload(tabs[0].id);
      });
    }, request.interval);
  } else if (request.action === "stopRefresh") {
    clearInterval(refreshInterval);
  }
});
