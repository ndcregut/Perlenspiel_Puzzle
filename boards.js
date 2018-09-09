// boards.js defines the different levels the player will go through during gameplay

// jslint and jshint options
/*jslint*/
/*jshint -W097*/ // Removes check that "use strict" is only inside functions instead of globally
/*global PS, Tile, Checkpoint*/
/* node: true, nomen: true, white: true */

"use strict";

class Board {
    constructor(gridHeight, gridWidth, layout, exits) {
        this.gridHeight = gridHeight;
        this.gridWidth = gridWidth;
        this.layout = layout;
        this.exits = exits;
    }
}

function GetNextBoard(exit) {

}

var start = new Board();
start.gridHeight = 10;
start.gridWidth = 10;
start.layout = [
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Chkp, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Chkp, Tile.Wall,
    Tile.Wall, Tile.Wall, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Wall, Tile.Wall, Tile.Wall
];
start.exits = [];