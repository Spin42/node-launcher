# USB Missile Launcher node.js
Control your usb missile launcher with this node.js script.

Use the arrow keys to move the tower and fire with the spacebar!

## Installing
* Clone this repository
* Install dependencies with `npm install`
* Plug your usb missile launcher to your computer
* Run the `launcher.js`script with `node launcher.js`

## Supported USB Missile launchers
The script is expected to work with several types of USB missile launchers.

| Name              | Vendor        | Status |
| ----------------- | ------------- | ------ |
| USB Raketenwerfer | getDigital    | Works  |

### How to test this script with other USB launchers
* Edit the `launcher.js` file
* Look for a variable called `launcher`
* Change the value of this variable with your launcher's HID path (check following section if you don't know how)
* Launch the script with `node launcher.js`

### Listing all connected HID USB devices
* Open a node.js console by running `node` in your terminal
* Require `node-hid` with `var HID = require('node-hid')`
* List all devices with `HID.devices()`

If other USB missile launchers work with this script, tell us and we'll add it to the list of supported devices.
