// player.js defines the functionality of the player during gameplay

// jslint and jshint options
/*jslint*/
/*jshint -W097*/ // Removes check that "use strict" is only inside functions instead of globally
/*global PS, Tile, Checkpoint, GameManager*/
/* node: true, nomen: true, white: true */

"use strict";

var Player = {
    color_Plyr: PS.COLOR_GREEN,

    // X and Y coordinates of the player on grid
    x: 1, y: 8,

    // Keep track of color player is taking up
    tileOver: Tile.Back,

    // Keep track of which direction gravity is moving
    gravDown: true,

    // Directions player can move
    leftDir: -1,
    rightDir: 1,

    // Check if player is able to switch gravity again
    canSwitch: true,

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

    CheckOnPlayerMove: function () {
        Player.OnDeath();

        Player.OnExitBoard();
        
        Player.GravitySwitchOnMove();

        Player.CheckPlayerCanSwitchGrav();
        
        Player.UpdateCheckpoint();
    },

    OnDeath: function () {
        // Only kill player when stepping on spike
        if (Player.tileOver !== Tile.Spke) return;

        GameManager.LoadScene(Checkpoint.board, Checkpoint.x, Checkpoint.y);

        Player.gravDown = true;
    },

    OnExitBoard: function () {
        var nextBoard = GameManager.currentBoard.GetNextBoard();

        if (nextBoard === null) return;

        var newPlayerLoc = nextBoard.GetPlayerLoc();
        GameManager.LoadScene(nextBoard, newPlayerLoc.x, newPlayerLoc.y);
    },

    /**
     * Check if player is able to move in either direction
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
     * Switch the gravity of the player on keypress
     * Only switches if player is grounded in either gravity direction
     */
    GravitySwitchOnKey: function () {
        if (!Player.CheckGrounded())
            return; // Only allow player to switch gravity if on ground
        else
            Player.gravDown = !Player.gravDown;
    },

    /**
     * Switch the gravity of the player on move over gravity tile
     * Does not matter if player is grounded or not
     */
    GravitySwitchOnMove: function () {
        if (Player.tileOver === Tile.Grav && Player.canSwitch) {
            Player.gravDown = !Player.gravDown;
            Player.canSwitch = false;
        }
    },

    /**
     * Check if the Tile below the player is a wall
     * returns true if so
     */
    CheckGrounded: function () {
        return (PS.color(Player.x, Player.y + (Player.gravDown === true ? 1 : -1)) === Tile.Wall);
    },

    CheckPlayerCanSwitchGrav: function () {
        if (Player.tileOver === Tile.Grav) return;

        Player.canSwitch = true;
    }
};

// Perform actions based on keypress
var controls = {};
controls[32] = Player.GravitySwitchOnKey;
controls[97] = Player.Move;
controls[100] = Player.Move;

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
