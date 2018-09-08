// boards.js defines the different levels the player will go through during gameplay

// jslint and jshint options
/*jslint*/
/*jshint -W097*/ // Removes check that "use strict" is only inside functions instead of globally
/*global PS, Tile, Checkpoint*/
/* node: true, nomen: true, white: true */

"use strict";

var Board1 = {
    gridHeight: 5,
    gridWidth: 5,
    layout: [
        Tile.brdr, Tile.brdr, Tile.brdr, Tile.brdr, Tile.brdr,
        Tile.brdr, Tile.wall, Tile.wall, Tile.wall, Tile.brdr,
        Tile.brdr, Tile.wall, Tile.wall, Tile.wall, Tile.brdr,
        Tile.brdr, Tile.wall, Tile.wall, Tile.wall, Tile.brdr,
        Tile.brdr, Tile.brdr, Tile.brdr, Tile.brdr, Tile.brdr,
    ]
};
