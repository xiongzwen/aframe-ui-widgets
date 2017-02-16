window.AFRAME = require('aframe');

AFRAME.registerComponent('ui-button', require('./src/button'));

AFRAME.registerComponent('ui-toggle', require('./src/toggle'));

AFRAME.registerComponent('ui-slider', require('./src/slider'));

AFRAME.registerComponent('ui-rotary', require('./src/rotary'));

AFRAME.registerComponent('ui-text-input', require('./src/text-input'));

AFRAME.registerComponent('ui-keyboard', require('./src/keyboard'));
