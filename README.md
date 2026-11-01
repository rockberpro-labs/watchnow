<p align="center">
  <img src="icons/icon128.png" alt="Watch Now! icon" width="96">
</p>

<h1 align="center">Watch Now!</h1>

<p align="center">
  One click to break a YouTube video out of its playlist, with no more auto-play queue.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/manifest-v3-blue" alt="Manifest V3">
  <img src="https://img.shields.io/badge/version-0.1.1-red" alt="Version 0.1.1">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="MIT license">
</p>

## Why

When you open a video from YouTube's Watch Later playlist (or any other playlist), YouTube appends playlist parameters to the URL:

```
https://www.youtube.com/watch?v=VIDEO_ID&list=WL&index=3
```

These `list` and `index` parameters make YouTube auto-play the next video in the queue when the current one ends. Sometimes you just want to watch a single video.

WatchNow turns the URL above into:

```
https://www.youtube.com/watch?v=VIDEO_ID
```

## Features

- Removes the `list` parameter (Watch Later or any other playlist)
- Removes the `index` parameter (position in the playlist)
- Keeps all other parameters, such as the `t` timestamp
- Does nothing on non-YouTube pages or URLs that are already clean
- Needs only the `activeTab` permission
- No tracking and no network requests

## Installation

1. Clone or download this repository:
   ```
   git clone https://github.com/rockberpro-play/watchnow.git
   ```
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top right)
4. Click **Load unpacked**
5. Select the extension's folder
6. The extension icon (a red "W") appears in your toolbar

## Usage

1. Open a video from your Watch Later playlist
2. Click the WatchNow icon in the toolbar
3. The page reloads with a clean URL, so the queue no longer auto-plays

## How it works

When you click the icon, `background.js` listens for `chrome.action.onClicked`, checks that the active tab is on `youtube.com`, deletes the `list` and `index` query parameters with `URLSearchParams`, and reloads the tab with `chrome.tabs.update`.

## Permissions

| Permission  | Why                                             |
| ----------- | ----------------------------------------------- |
| `activeTab` | Read and update the URL of the tab you click on |

## Project structure

```
watchnow/
├── manifest.json   # Extension manifest (MV3)
├── background.js   # Service worker that cleans the URL
└── icons/          # Toolbar and store icons (16, 48, 128)
```

## License

[MIT](LICENSE) © Rockberpro
