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

// Define the boards of the game
var start = new Board();
start.gridHeight = 3;
start.gridWidth = 5;
start.layout = [
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall
];

var firstSpike = new Board();
firstSpike.gridHeight = 5;
firstSpike.gridWidth = 8;
firstSpike.layout = [
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Back, Tile.Chkp, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Wall, Tile.Wall, Tile.Wall
];

var firstGrav = new Board();
firstGrav.gridHeight = 8;
firstGrav.gridWidth = 10;
firstGrav.layout = [
    Tile.Wall, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Wall, Tile.Wall
];

var hub = new Board();
hub.gridHeight = 15;
hub.gridWidth = 20;
hub.layout = [
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall, Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall, Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall,
    Tile.Wall, Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
];

var keyRoom = new Board();
keyRoom.gridHeight = 0;
keyRoom.gridWidth = 0;
keyRoom.layout = [];

// Define the entrances and exits using existing boards
start.entrances = [
    { lastBoard: firstSpike, x: 3, y: 1 }
];
start.exits = [
    { nextBoard: firstSpike, x: 4, y: 1 }
];

firstSpike.entrances = [
    { lastBoard: start, x: 1, y: 3 },
    { lastBoard: firstGrav, x: 6, y: 3 }
];
firstSpike.exits = [
    { nextBoard: start, x: 0, y: 3 },
    { nextBoard: firstGrav, x: 7, y: 3 }
];

firstGrav.entrances = [
    { lastBoard: firstSpike, x: 1, y: 6 },
    { lastBoard: hub, x: 8, y: 6 }
];
firstGrav.exits = [
    { nextBoard: firstSpike, x: 0, y: 6 },
    { nextBoard: hub, x: 9, y: 6 }
];

hub.entrances = [
    { lastBoard: firstGrav, x: 1, y: 13 }
];
hub.exits = [
    { nextBoard: firstGrav, x: 0, y: 13 },
    { nextBoard: firstGrav, x: 0, y: 7 },
    { nextBoard: firstGrav, x: 19, y: 7 },
    // Both exits at top of board
    { nextBoard: firstGrav, x: 9, y: 0 },
    { nextBoard: firstGrav, x: 10, y: 0 }
];

keyRoom.entrances = [
    { lastBoard: hub, x: 0, y: 0 }
];
keyRoom.exits = [
    { nextBoard: hub, x: 0, y: 0 }
];
