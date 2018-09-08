// player.js defines the functionality of the player during gameplay

// jslint and jshint options
/*jslint*/
/*jshint -W097*/ // Removes check that "use strict" is only inside functions instead of globally
/*global PS, Tile*/
/* node: true, nomen: true, white: true */

"use strict";

var Player = {
    color_Plyr: PS.COLOR_GREEN,
    tileOver: Tile.wall, // Keep track of color player is taking up
    // use array.indexOf("element") > -1 to check if element is in array
    floor: [],
    hazard: [],
    OnDeath: function () {

    },
    Update: function () {

    },
    NewCheckpoint: function (x, y, level) {

    },
    Gravity: function () {

    }
};
