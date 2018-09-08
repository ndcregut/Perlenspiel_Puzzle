// gameObjects.js defines object types to be used within boards.js

// jslint and jshint options
/*jslint*/
/*jshint -W097*/ // Removes check that "use strict" is only inside functions instead of globally
/*global PS, Board1*/
/* node: true, nomen: true, white: true */

"use strict";

var Tile = {
    brdr: 0,
    brdrColor: PS.COLOR_GRAY_DARK,
    wall: 1,
    wallColor: PS.COLOR_WHITE,
    grav: 2,
    gravColor: PS.COLOR_BLUE,
    spke: 3,
    spkeColor: PS.COLOR_RED,
    cpnt: 4,
    cpntColor: PS.COLOR_GREEN
};

var Checkpoint = {
    level: 0,
    x: 0,
    y: 0
};
