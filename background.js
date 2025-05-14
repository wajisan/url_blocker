const updateIfBlocked = (details) => {
  chrome.storage.sync.get("blockedUrls", (data) => {
    const blockedUrls = data.blockedUrls || [];
    for (const pattern of blockedUrls) {
      const regexPattern = pattern
        .replace(/\*/g, ".*")
        .replace(/^https?:\/\//, ".*://");
      
      if (new RegExp(`^${regexPattern}$`).test(details.url)) {
        chrome.tabs.update(details.tabId, { url: chrome.runtime.getURL("blocked.html") });
        break;
      }
    }
  });
};

// Événement pour la navigation complète
chrome.webNavigation.onCompleted.addListener(updateIfBlocked);

// Événement pour les changements d'historique (navigation interne SPA)
chrome.webNavigation.onHistoryStateUpdated.addListener(updateIfBlocked);