chrome.action.onClicked.addListener(async (tab) => {
    if (!tab.url) return;

    const url = new URL(tab.url);

    // Only process YouTube URLs
    if (!url.hostname.includes('youtube.com')) return;

    // Check if WL or index params exist
    const hasWL = url.searchParams.has('list') && url.searchParams.get('list').startsWith('WL');
    const hasIndex = url.searchParams.has('index');

    if (!hasWL && !hasIndex) return;

    // Remove the Watch Later related params
    if (hasWL) {
        url.searchParams.delete('list');
    }
    url.searchParams.delete('index');

    // Update the tab with the clean URL
    await chrome.tabs.update(tab.id, { url: url.toString() });
});
