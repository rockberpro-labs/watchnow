chrome.action.onClicked.addListener(async (tab) => {
    if (!tab.url) return;

    const url = new URL(tab.url);

    // Only process YouTube URLs
    if (!url.hostname.includes('youtube.com')) return;

    const hasList = url.searchParams.has('list');
    const hasIndex = url.searchParams.has('index');

    if (!hasList && !hasIndex) return;

    if (hasList) {
        url.searchParams.delete('list');
    }
    if (hasIndex) {
        url.searchParams.delete('index');
    }

    // Update the tab with the clean URL
    await chrome.tabs.update(tab.id, { url: url.toString() });
});
