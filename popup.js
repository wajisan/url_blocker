const urlInput = document.getElementById("urlInput");
const addUrlButton = document.getElementById("addUrl");
const urlList = document.getElementById("urlList");

const renderList = () => {
  chrome.storage.sync.get("blockedUrls", (data) => {
    const blockedUrls = data.blockedUrls || [];
    urlList.innerHTML = "";
    blockedUrls.forEach((url, index) => {
      const li = document.createElement("li");
      li.textContent = url;
      
      const removeButton = document.createElement("button");
      removeButton.textContent = "X";
      removeButton.onclick = () => removeUrl(index);
      li.appendChild(removeButton);

      urlList.appendChild(li);
    });
  });
};

const addUrl = () => {
  const newUrl = urlInput.value.trim();
  if (!newUrl) return;

  chrome.storage.sync.get("blockedUrls", (data) => {
    const blockedUrls = data.blockedUrls || [];
    blockedUrls.push(newUrl);

    chrome.storage.sync.set({ blockedUrls }, () => {
      urlInput.value = "";
      renderList();
    });
  });
};

const removeUrl = (index) => {
  chrome.storage.sync.get("blockedUrls", (data) => {
    const blockedUrls = data.blockedUrls || [];
    blockedUrls.splice(index, 1);

    chrome.storage.sync.set({ blockedUrls }, () => {
      renderList();
    });
  });
};

addUrlButton.addEventListener("click", addUrl);
renderList();
