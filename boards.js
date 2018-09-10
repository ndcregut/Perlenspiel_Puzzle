// boards.js defines the different levels the player will go through during gameplay

// jslint and jshint options
/*jslint*/
/*jshint -W097, esversion: 6*/ // Removes check that "use strict" is only inside functions instead of globally
/*global PS, Tile, Player, GameManager*/
/* node: true, nomen: true, white: true */

"use strict";

class Board {
    constructor() {
        this.gridHeight = null;
        this.gridWidth = null;
        this.layout = null;
        this.exits = null;
    }

    GetNextBoard() {
        for (var i = 0; i < this.exits.length; ++i) {
            if (Player.x === this.exits[i].x && Player.y === this.exits[i].y) {
                return this.exits[i].nextBoard;
            }
        }

        return null;
    }

    GetPlayerLoc() {
        for (var i = 0; i < this.entrances.length; ++i) {
            if (this.entrances[i].lastBoard === GameManager.currentBoard) {
                return { x: this.entrances[i].x, y: this.entrances[i].y };
            }
        }

        return null;
    }
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
    Tile.Wall, Tile.Chkp, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Chkp, Tile.Back,
    Tile.Wall, Tile.Wall, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Wall, Tile.Wall, Tile.Wall
];

var newBoard = new Board();
newBoard.gridHeight = 5;
newBoard.gridWidth = 8;
newBoard.layout = [
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall
];

// Define the entrances and exits using existing boards
start.entrances = [
    { lastBoard: newBoard, x: 8, y: 8 }
];
start.exits = [
    { nextBoard: newBoard, x: 9, y: 8 }
];

newBoard.entrances = [
    { lastBoard: start, x: 1, y: 3 }
];
newBoard.exits = [
    { nextBoard: start, x: 0, y: 3 }
];