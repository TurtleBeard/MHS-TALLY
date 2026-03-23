# MHS-TALLY

<p align="center">
  <img src="banner.png" alt="Michaelhouse Logo" width="400px">
</p>

## Overview
A real-time tally system designed for interhouse events. This system allows for a professional display of house scores that can be updated live from a separate controller window.

## Features
* **Real-Time Sync:** Uses the `BroadcastChannel` API to sync scores across windows instantly—no database required.
* **Dynamic Grid:** Automatically adjusts the layout (1-col, 2-col, or grid) based on the number of houses currently marked as "visible."
* **Persistent Storage:** Scores are saved to the browser's `localStorage`. They will remain even if the tab is closed or the computer is restarted.

---

## How to Use

### 1. Launching the Display
Open `tallies.html` in any modern web browser. **Chrome** or **Edge** are recommended for the best experience.

### 2. Opening the Controller
1. Click anywhere on the main display page to ensure it has focus.
2. Press the **`C`** key on your keyboard.
3. A secondary window will open. Drag this to your laptop screen while keeping the main display on the secondary screen e.g. projector.

### 3. Controls
| Action | Key/Button |
| :--- | :--- |
| **Fullscreen** | Press `F` |
| **Open Controller** | Press `C` |
| **Adjust Score** | Use `+` / `-` buttons or type directly in the number box |
| **Rename House** | Click the house name in the controller to edit text |
| **Hide House** | Toggle the checkbox next to the house name |
| **Reset All** | Click the red "RESET ALL TALLIES" button |

---

## Technical Details
This is a **Zero-Backend** solution. It runs entirely on the client side using:
* **HTML5/CSS3:** Flexbox grid and clamp-based typography for scaling.
* **JavaScript (ES6):** State management and cross-window messaging.
* **BroadcastChannel:** Synchronizes the `appBody` between the display and the controller.

---

## Credits
Developed by **Trent Buckley | 2026**
