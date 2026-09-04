chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    if (tab.url.includes("youtube.com/watch") && !tab.url.includes("&t=1")) {
      const separator = tab.url.includes("?") ? "&" : "?";
      const newUrl = tab.url + separator + "t=1";
      chrome.tabs.update(tabId, { url: newUrl });
    }
  }
});
