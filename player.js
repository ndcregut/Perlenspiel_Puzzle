// player.js defines the functionality of the player during gameplay

// jslint and jshint options
/*jslint*/
/*jshint -W097*/ // Removes check that "use strict" is only inside functions instead of globally
/*global PS, Tile, Checkpoint, GameManager, RemoveKeyTiles, Hazards, Keys*/
/* node: true, nomen: true, white: true */

"use strict";

/**
 * Methods and members defining the player character in the game
 */
var Player = {
    color_Plyr: PS.COLOR_GREEN,

    // X and Y coordinates of the player on grid
    x: 1, y: 1,

    // Keep track of color player is taking up
    tileOver: Tile.Back,

    // Keep track of which direction gravity is moving
    gravDown: true,

    // Directions player can move
    leftDir: -1,
    rightDir: 1,

    // Check if player is able to switch gravity again
    canSwitch: true,

    /**
     * Update postion of the player based on gravity every frame
     */
    Tick: function () {
        if (Player.CheckGrounded()) return;

        // Replace where player was with original color
        PS.color(Player.x, Player.y, Player.tileOver);

        // Move player to new location
        Player.y += Player.gravDown ? 1 : -1;

        // Keep color of replaced tile
        Player.tileOver = PS.color(Player.x, Player.y);

        // Check if player is on special tile
        Player.CheckOnPlayerMove();

        // Show player at new location
        PS.color(Player.x, Player.y, Player.color_Plyr);
    },

    /**
     * Update position of the player based on button pressed during frames
     * when button is held down
     */
    Move: function (key) {
        if (Player.CheckAvailMove(key)) return;
        // Replace where player was with original color
        PS.color(Player.x, Player.y, Player.tileOver);

        // Move player to new location
        Player.x += directions[key];

        // Keep color of replaced tile
        Player.tileOver = PS.color(Player.x, Player.y);

        // Check if player is on special tile
        Player.CheckOnPlayerMove();

        // Show player at new location
        PS.color(Player.x, Player.y, Player.color_Plyr);
    },

    /**
     * Check if player has moved over a special tile and do action based on tile
     */
    CheckOnPlayerMove: function () {
        Player.OnDeath();

        Player.OnExitBoard();

        Player.OnGetKey();

        Player.GravitySwitchOnMove();

        Player.CheckPlayerCanSwitchGrav();

        Player.UpdateCheckpoint();
    },

    /**
     * Kill player when stepped on any hazardous tiles
     */
    OnDeath: function () {
        // Only kill player when stepping on spike
        if (Hazards.indexOf(Player.tileOver) < 0) {
            return;
        }

        GameManager.LoadScene(Checkpoint.board, Checkpoint.x, Checkpoint.y);

        Player.gravDown = true;
    },

    /**
     * Load new board when player moves to any exit of current board
     */
    OnExitBoard: function () {
        var nextBoard = GameManager.currentBoard.GetNextBoard();

        if (nextBoard === null) return;

        var newPlayerLoc = nextBoard.GetPlayerLoc();
        GameManager.LoadScene(nextBoard, newPlayerLoc.x, newPlayerLoc.y);
    },

    /**
     * Remove the key tiles in the keyroom when player goes over key
     */
    OnGetKey: function () {
        if (Keys.indexOf(Player.tileOver) < 0) {
            return;
        }

        GameManager.currentBoard.RemoveKeyTiles(Player.tileOver);
        GameManager.currentBoard.layout[GameManager.currentBoard.gridWidth * Player.y + Player.x] = Tile.Back;
        Player.tileOver = Tile.Back;
    },

    /**
     * Check if player is able to move in direction pressed
     */
    CheckAvailMove: function (key) {
        return (timerKeys[97] !== 0 && timerKeys[100] !== 0) ||
            (PS.color(Player.x + (key === 97 ? -1 : 1), Player.y) === Tile.Wall);
    },

    UpdateCheckpoint: function (x, y, level) {
        if (Player.tileOver !== Tile.Chkp) return;

        Checkpoint.SetNewCheckpoint(GameManager.currentBoard);
    },

    /**
     * Switch the gravity of the player on keypress.
     * Only switches if player is grounded in either gravity direction
     */
    GravitySwitchOnKey: function () {
        if (!Player.CheckGrounded())
            return; // Only allow player to switch gravity if on ground
        else
            Player.gravDown = !Player.gravDown;
    },

    /**
     * Switch the gravity of the player on move over gravity tile.
     * Does not matter if player is grounded or not
     */
    GravitySwitchOnMove: function () {
        if (Player.tileOver === Tile.Grav && Player.canSwitch) {
            Player.gravDown = !Player.gravDown;
            Player.canSwitch = false;
        }
    },

    /**
     * Check if the Tile below the player is a wall,
     * returns true if so
     */
    CheckGrounded: function () {
        return (PS.color(Player.x, Player.y + (Player.gravDown === true ? 1 : -1)) === Tile.Wall);
    },

    /**
     * Checks to make sure player has moved outside of line of gravity tiles
     * if tiles are next to each other before switching gravity
     */
    CheckPlayerCanSwitchGrav: function () {
        if (Player.tileOver === Tile.Grav) return;

        Player.canSwitch = true;
    }
};

// Perform actions based on keypress
var controls = {};
controls[32] = Player.GravitySwitchOnKey;   // Space
controls[97] = Player.Move;                 // A
controls[100] = Player.Move;                // D

// Keep references of running timers
var timerKeys = {};
timerKeys[97] = 0;
timerKeys[100] = 0;

// Keep track of keys being held down
var heldKeys = {};
heldKeys[32] = false;

// Directions player can move
var left = -1;
var right = 1;
var directions = {};
directions[97] = left;
directions[100] = right;
