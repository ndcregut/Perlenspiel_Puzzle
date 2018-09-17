// gameObjects.js defines object types to be used within boards.js

// jslint and jshint options
/*jslint*/
/*jshint -W097*/ // Removes check that "use strict" is only inside functions instead of globally
/*global PS, Player*/
/* node: true, nomen: true, white: true */

"use strict";

var Tile = {
    "Wall": PS.COLOR_GRAY_DARK,
    "Back": PS.COLOR_WHITE,
    "Grav": 0x6699ff,
    "Spke": 0xff0000,
    "Chkp": PS.COLOR_VIOLET,
    "Okey": PS.COLOR_ORANGE,
    "Otle": 0xcc3300,
    "Mkey": PS.COLOR_MAGENTA,
    "Mtle": 0xcc0066,
    "Goal": 0xe6e600
};

var Checkpoint = {
    board: '',
    x: '',
    y: '',

    SetNewCheckpoint: function (level) {
        Checkpoint.board = level;
        Checkpoint.x = Player.x;
        Checkpoint.y = Player.y;
    }
};

// Tiles that are hazardous to player
var Hazards = [Tile.Spke, Tile.Otle, Tile.Mtle];

// Tiles that act as keys
var Keys = [Tile.Okey, Tile.Mkey];
