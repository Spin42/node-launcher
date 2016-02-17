'use strict';

var keypress = require("keypress");
var HID      = require("node-hid");

keypress(process.stdin);

process.stdin.setRawMode(true);
process.stdin.resume();

var launcher = "USB_2123_1010_14100000";

var MOVING   = false
var STEPS    = 100

var device = new HID.HID(launcher);

var down = function(){
  device.write([0x02, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
}

var up = function(){
  device.write([0x02, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
}

var left = function(){
  device.write([0x02, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
}

var right = function(){
  device.write([0x02, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
}

var fire = function(){
  device.write([0x02, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
}

var stop = function(){
  device.write([0x02, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
}

var move = function(direction){
  MOVING = true
  direction();
  setTimeout(function () {
    stop();
    MOVING = false;
  }, STEPS);
}

process.stdin.on("keypress", function (ch, key) {
  if (!MOVING && key) {
    if (key.name === "left") {
      move(left);
    } else if (key.name === "right") {
      move(right);
    } else if (key.name === "down") {
      move(down);
    } else if (key.name === "up") {
      move(up);
    }
    else if (key.name === "space") {
      fire();
    }
    else if (key.name === "q") {
      process.stdin.pause();
      process.exit();
    }
  }
});
