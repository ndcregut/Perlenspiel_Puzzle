// gameObjects.js defines object types to be used within boards.js

// jslint and jshint options
/*jslint*/
/*jshint -W097, esversion: 6*/ // Removes check that "use strict" is only inside functions instead of globally
/*global PS, Board1*/
/* node: true, nomen: true, white: true */

"use strict";

var Tile = {
    "Wall": 0xffffff,
    "Back": 0x000000,
    "Grav": 0x6699ff,
    "Spke": 0xff0000,
    "Chkp": 0x00cc44
};

var Checkpoint = {
    level: '',
    x: '',
    y: ''
};
