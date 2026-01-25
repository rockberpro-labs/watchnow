# WatchNow

A Chrome extension that removes YouTube Watch Later queue parameters from video URLs, letting you watch videos now without playlist interference.

## Problem

When you open a video from YouTube's Watch Later playlist into a new tab, YouTube appends query parameters to the URL:

```
https://www.youtube.com/watch?v=VIDEO_ID&list=WL&index=3
```

These `list=WL` and `index` parameters tell YouTube to automatically play the next video in your Watch Later queue when the current video ends. This can be annoying when you just want to watch a single video without triggering the auto-play queue behavior.

## Solution

Click the WatchNow extension icon while on a YouTube video page. The extension will:

1. Remove the `list=WL` parameter (Watch Later playlist reference)
2. Remove the `index` parameter (position in playlist)
3. Reload the page with a clean URL

The video will now play as a standalone video without auto-advancing to the next item in your Watch Later queue.

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Select this extension's folder
5. The extension icon will appear in your toolbar

## Usage

1. Open a video from your Watch Later playlist
2. Click the WatchNow extension icon (red "W")
3. The page reloads with a clean URL - no more auto-play queue

## Permissions

- `activeTab`: Required to read and modify the current tab's URL

## License

MIT
