// meta.js defines how the game is to be handled during runtime

// jslint and jshint options
/*jslint*/
/*jshint -W097*/ // Removes check that "use strict" is only inside functions instead of globally
/*global PS, Tile, Checkpoint, Player, Board*/
/* node: true, nomen: true, white: true */

"use strict";

var GameManager = {
    tickTimer: null,
    currentBoard: new Board(),

    LoadScene: function (level, x, y) {
        if (GameManager.tickTimer !== null) PS.timerStop(GameManager.tickTimer);
        PS.gridSize(level.gridWidth, level.gridHeight);

        // Color each bead according to board definition
        var i, j;
        for (i = 0; i < level.gridHeight; ++i) {
            for (j = 0; j < level.gridWidth; ++j) {
                PS.color(j, i, level.layout[(level.gridWidth * i + j)]);
            }
        }

        // Add player to board
        Player.tileOver = PS.color(x, y);
        PS.color(x, y, Player.color_Plyr);
        
        // Set player position
        Player.x = x;
        Player.y = y;

        // Hide all borders
        PS.border(PS.ALL, PS.ALL, 0);

        // Reference to the loaded board
        GameManager.currentBoard = level;

        // Start player tick timer for gravity
        GameManager.tickTimer = PS.timerStart(5, Player.Tick);
    }
};
