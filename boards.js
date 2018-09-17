// boards.js defines the different levels the player will go through during gameplay

// jslint and jshint options
/*jslint*/
/*jshint -W097, esversion: 6*/ // Removes check that "use strict" is only inside functions instead of globally
/*global PS, Tile, Player, GameManager*/
/* node: true, nomen: true, white: true */

"use strict";

// #region Board Definition
/**
 * Functions for creating different boards used in the game
 */
class Board {
    constructor() {
        this.gridHeight = null;
        this.gridWidth = null;
        this.layout = null;
        this.entrances = null;
        this.exits = null;
    }

    /**
     * Find the next board to load based on which exit was used
     * @returns {Board} Next board to load
     */
    GetNextBoard() {
        for (var i = 0; i < this.exits.length; ++i) {
            if (Player.x === this.exits[i].x && Player.y === this.exits[i].y) {
                return this.exits[i].nextBoard;
            }
        }

        return null;
    }

    /**
     * Get the player location of the room on enter based on previous board
     * @returns {object} Object containing the x and y position in the room
     */
    GetPlayerLoc() {
        for (var i = 0; i < this.entrances.length; ++i) {
            if (this.entrances[i].lastBoard === GameManager.currentBoard) {
                return { x: this.entrances[i].x, y: this.entrances[i].y };
            }
        }

        return null;
    }

    /**
     * Replaces tiles in the key room based on key picked up
     * @param {Tile} tileCol The color of the key picked up
     */
    RemoveKeyTiles(tileCol) {
        for (var i = 0; i < keyRoom.layout.length; ++i) {
            if ((tileCol === Tile.Okey) ? keyRoom.layout[i] === Tile.Otle : keyRoom.layout[i] === Tile.Mtle) {
                keyRoom.layout[i] = Tile.Wall;
            }
        }
    }
}
// #endregion

//#region Board Initializations
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
    Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Chkp, Tile.Wall,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall
];

var keyRoom = new Board();
keyRoom.gridHeight = 15;
keyRoom.gridWidth = 15;
keyRoom.layout = [
    Tile.Wall, Tile.Otle, Tile.Otle, Tile.Otle, Tile.Otle, Tile.Otle, Tile.Otle, Tile.Otle, Tile.Otle, Tile.Otle, Tile.Otle, Tile.Otle, Tile.Otle, Tile.Otle, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Otle, Tile.Mtle, Tile.Otle, Tile.Mtle, Tile.Otle, Tile.Mtle, Tile.Otle, Tile.Mtle, Tile.Otle, Tile.Wall, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Goal, Tile.Wall, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Otle, Tile.Mtle, Tile.Otle, Tile.Mtle, Tile.Otle, Tile.Mtle, Tile.Otle, Tile.Mtle, Tile.Wall, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Mtle, Tile.Mtle, Tile.Mtle, Tile.Mtle, Tile.Mtle, Tile.Mtle, Tile.Mtle, Tile.Mtle, Tile.Mtle, Tile.Mtle, Tile.Mtle, Tile.Wall
];

var pitEntrance = new Board();
pitEntrance.gridHeight = 7;
pitEntrance.gridWidth = 15;
pitEntrance.layout = [
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Back, Tile.Back, Tile.Chkp, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Chkp, Tile.Back, Tile.Back,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall
];

var pitDescendRight = new Board();
pitDescendRight.gridHeight = 15;
pitDescendRight.gridWidth = 15;
pitDescendRight.layout = [
    Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Wall, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Wall
];

var pitDescendLeft = new Board();
pitDescendLeft.gridHeight = 15;
pitDescendLeft.gridWidth = 15;
pitDescendLeft.layout = [
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Wall, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke,
    Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
];

var pit = new Board();
pit.gridHeight = 16;
pit.gridWidth = 20;
pit.layout = [
    Tile.Wall, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Spke, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Spke, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall
];

var orangeKey = new Board();
orangeKey.gridHeight = 4;
orangeKey.gridWidth = 7;
orangeKey.layout = [
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Okey, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall
];

var magentaKey = new Board();
magentaKey.gridHeight = 16;
magentaKey.gridWidth = 20;
magentaKey.layout = [
    Tile.Wall, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Wall,
    Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Chkp, Tile.Wall, Tile.Back, Tile.Mkey, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
];

var jump = new Board();
jump.gridHeight = 20;
jump.gridWidth = 17;
jump.layout = [
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
    Tile.Wall, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Spke, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Wall, Tile.Spke, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Wall, Tile.Spke, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Spke, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Wall, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Wall, Tile.Back, Tile.Wall, Tile.Spke, Tile.Spke, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
];

var bounce = new Board();
bounce.gridHeight = 15;
bounce.gridWidth = 15;
bounce.layout = [
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Grav, Tile.Grav, Tile.Grav, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Back, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Back, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Wall,
    Tile.Wall, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Back, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Spke, Tile.Wall,
];

var finish = new Board();
finish.gridHeight = 15;
finish.gridWidth = 15;
finish.layout = [
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Wall, Tile.Back, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Wall, Tile.Back, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Wall, Tile.Back, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Back, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Back, Tile.Wall, Tile.Wall, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Back, Tile.Wall,
    Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall, Tile.Wall,
];
//#endregion

//#region Board Transitions
start.entrances = [
    { lastBoard: firstSpike, x: 3, y: 1 }
];
start.exits = [
    { nextBoard: firstSpike, x: 4, y: 1 }
];

firstSpike.entrances = [
    // Left
    { lastBoard: start, x: 1, y: 3 },
    // Right
    { lastBoard: firstGrav, x: 6, y: 3 }
];
firstSpike.exits = [
    // Left
    { nextBoard: start, x: 0, y: 3 },
    // Right
    { nextBoard: firstGrav, x: 7, y: 3 }
];

firstGrav.entrances = [
    // Left
    { lastBoard: firstSpike, x: 1, y: 6 },
    // Right
    { lastBoard: hub, x: 8, y: 6 }
];
firstGrav.exits = [
    // Left
    { nextBoard: firstSpike, x: 0, y: 6 },
    // Right
    { nextBoard: hub, x: 9, y: 6 }
];

hub.entrances = [
    // Left bottom
    { lastBoard: firstGrav, x: 1, y: 13 },
    // Left upper
    { lastBoard: pitEntrance, x: 1, y: 7 },
    // Right
    { lastBoard: magentaKey, x: 18, y: 7 },
    // Top
    { lastBoard: keyRoom, x: 9, y: 1 }
];
hub.exits = [
    // Left bottom
    { nextBoard: firstGrav, x: 0, y: 13 },
    // Left upper
    { nextBoard: pitEntrance, x: 0, y: 7 },
    // Right
    { nextBoard: magentaKey, x: 19, y: 7 },
    // Both exits at top of board
    { nextBoard: keyRoom, x: 9, y: 0 },
    { nextBoard: keyRoom, x: 10, y: 0 }
];

keyRoom.entrances = [
    // Bottom
    { lastBoard: hub, x: 1, y: 13 }
];
keyRoom.exits = [
    // Bottom
    { nextBoard: hub, x: 1, y: 14 },
    // Inner
    { nextBoard: finish, x: 11, y: 6 }
];

finish.entrances = [
    { lastBoard: keyRoom, x: 1, y: 1 }
];

pitEntrance.entrances = [
    // Right
    { lastBoard: hub, x: 13, y: 5 },
    // Bottom Right
    { lastBoard: pitDescendRight, x: 11, y: 5 },
    // Bottom Left
    { lastBoard: pitDescendLeft, x: 3, y: 5 },
    // Left
    { lastBoard: orangeKey, x: 1, y: 5 }
];
pitEntrance.exits = [
    // Right
    { nextBoard: hub, x: 14, y: 5 },
    // Bottom Right
    { nextBoard: pitDescendRight, x: 11, y: 6 },
    // Bottom Left
    { nextBoard: pitDescendLeft, x: 3, y: 6 },
    // Left
    { nextBoard: orangeKey, x: 0, y: 5 }
];

pitDescendRight.entrances = [
    // Top
    { lastBoard: pitEntrance, x: 2, y: 1 },
    //Bottom
    { lastBoard: pit, x: 13, y: 13 }
];
pitDescendRight.exits = [
    // Top
    { nextBoard: pitEntrance, x: 2, y: 0 },
    //Bottom
    { nextBoard: pit, x: 13, y: 14 }
];

pitDescendLeft.entrances = [
    // Top
    { lastBoard: pitEntrance, x: 13, y: 1 },
    //Bottom
    { lastBoard: pit, x: 2, y: 13 }
];
pitDescendLeft.exits = [
    // Top
    { nextBoard: pitEntrance, x: 13, y: 0 },
    //Bottom
    { nextBoard: pit, x: 2, y: 14 }
];

pit.entrances = [
    // Top Right
    { lastBoard: pitDescendRight, x: 18, y: 1 },
    // Top Left
    { lastBoard: pitDescendLeft, x: 1, y: 1 }
];
pit.exits = [
    // Top Right
    { nextBoard: pitDescendRight, x: 18, y: 0 },
    // Top Left
    { nextBoard: pitDescendLeft, x: 1, y: 0 }
];

orangeKey.entrances = [
    { lastBoard: pitEntrance, x: 5, y: 2 }
];
orangeKey.exits = [
    { nextBoard: pitEntrance, x: 6, y: 2 }
];

magentaKey.entrances = [
    // Left
    { lastBoard: hub, x: 2, y: 1 },
    // Top entrances
    { lastBoard: jump, x: 13, y: 1 }
];
magentaKey.exits = [
    // Left
    { nextBoard: hub, x: 0, y: 1 },
    // Top entrances
    { nextBoard: jump, x: 12, y: 0 },
    { nextBoard: jump, x: 13, y: 0 },
    { nextBoard: jump, x: 14, y: 0 }
];

jump.entrances = [
    // Top
    { lastBoard: bounce, x: 8, y: 1 },
    // Bottom
    { lastBoard: magentaKey, x: 8, y: 18 }
];
jump.exits = [
    // Top
    { nextBoard: bounce, x: 8, y: 0 },
    // Bottom
    { nextBoard: magentaKey, x: 8, y: 19 }
];

bounce.entrances = [
    { lastBoard: jump, x: 7, y: 13 }
];
bounce.exits = [
    { nextBoard: jump, x: 7, y: 14 }
];
//#endregion
