// game.js for Perlenspiel 3.2

// jslint and jshint options
/*jslint*/
/*jshint -W097, esversion: 6*/ // Removes check that "use strict" is only inside functions instead of globally
/*global PS, GameManager, start, Player*/
/* node: true, nomen: true, white: true */

"use strict";

/*
 * All additional functions and their uses/parameters can be found at:
 * http://users.wpi.edu/~bmoriarty/ps/api.html
 */

/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
[system] = an object containing engine and platform information; see API documentation for details.
[options] = an object with optional parameters; see API documentation for details.
*/
PS.init = function () {
    GameManager.LoadScene(start);
    PS.color(0, 0, Player.color_Plyr);
};

var Meta = {

};
