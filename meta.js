// meta.js defines how the game is to be handled during runtime

// jslint and jshint options
/*jslint*/
/*jshint -W097, esversion: 6*/ // Removes check that "use strict" is only inside functions instead of globally
/*global PS, Tile*/
/* node: true, nomen: true, white: true */

"use strict";

var GameManager = {
    LoadScene: function (level) {
        PS.gridSize(level.gridWidth, level.gridHeight);

        var i, j;
        for (i = 0; i < level.gridHeight; ++i) {
            for (j = 0; j < level.gridWidth; ++j) {
                PS.color(j, i, level.layout[(level.gridWidth * i + j)]);
            }
        }
    }
};
