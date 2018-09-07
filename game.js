// game.js for Perlenspiel 3.2

// jslint and jshint options
/*jslint*/
/*jshint -W097*/ // Removes check that "use strict" is only inside functions instead of globally
/*global PS*/
/* node: true, nomen: true, white: true */

"use strict";
/***
 * Use strict is important, DO NOT REMOVE!!!
 * Any of the functions may be taken out if they are not used
 * All of the debugs may be taken out
 * Comments above functions describe what functions and parameters are used for
 * ***/

/***
 * All additional functions and their uses/parameters can be found at:
 * http://users.wpi.edu/~bmoriarty/ps/api.html
 * ***/

/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
[system] = an object containing engine and platform information; see API documentation for details.
[options] = an object with optional parameters; see API documentation for details.
*/
PS.init = function (system, options) {
    GameManager.LoadScene(Level1);
};

PS.touch = function (x, y, data, options) {
    GameManager.LoadScene(Level1);
};

var Meta = {

};

var Tile = {
    brdr: 0,
    Color_Brdr: PS.COLOR_GRAY_DARK,
    wall: 1,
    Color_Wall: PS.COLOR_WHITE
};

var GameManager = {
    LoadScene: function (level) {
        PS.gridSize(level.gridWidth, level.gridHeight);

        var i, j;
        for (i = 0; i < level.gridHeight; ++i) {
            for (j = 0; j < level.gridWidth; ++j) {
                switch (level.layout[level.gridWidth * i + j]) {
                    case Tile.brdr:
                        PS.color(j, i, Tile.Color_Brdr);
                        break;
                    case Tile.wall:
                        PS.color(j, i, Tile.Color_Wall);
                        break;
                    default:
                        PS.debug("Tile not recognized");
                        break;
                }
            }
        }
    }
};

var Player = {
    Color_Plyr: PS.COLOR_GREEN,
    onDeath: function () {

    }
};

var Checkpoint = {
    level: Level1,
    x: 0,
    y: 0
};

var Level1 = {
    gridHeight: 0,
    gridWidth: 0,
    layout: []
};
