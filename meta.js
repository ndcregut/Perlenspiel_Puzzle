// meta.js defines how the game is to be handled during runtime

// jslint and jshint options
/*jslint*/
/*jshint -W097*/ // Removes check that "use strict" is only inside functions instead of globally
/*global PS, Tile, Checkpoint, Player, start*/
/* node: true, nomen: true, white: true */

"use strict";

var GameManager = {
    currentLevel: '',

    LoadScene: function (level) {
        PS.gridSize(level.gridWidth, level.gridHeight);

        var i, j;
        for (i = 0; i < level.gridHeight; ++i) {
            for (j = 0; j < level.gridWidth; ++j) {
                PS.color(j, i, level.layout[(level.gridWidth * i + j)]);
            }
        }

        // Add player to board
        Player.tileOver = PS.color(Player.x, Player.y);
        PS.color(Checkpoint.x, Checkpoint.y, Player.color_Plyr);

        // Hide all borders
        PS.border(PS.ALL, PS.ALL, 0);

        GameManager.currentLevel = level;
    }
};
