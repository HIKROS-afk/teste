document.getElementById("start").addEventListener("click", () => {
    const interval = parseInt(document.getElementById("interval").value, 10);
    chrome.runtime.sendMessage({ action: "startRefresh", interval });
  });
  
  document.getElementById("stop").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "stopRefresh" });
  });
  