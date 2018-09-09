// game.js for Perlenspiel 3.2

// jslint and jshint options
/*jslint*/
/*jshint -W097*/ // Removes check that "use strict" is only inside functions instead of globally
/*global PS, GameManager, Checkpoint, start, Player, controls, timerKeys, heldKeys*/
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
PS.init = function (system, options) {
    Checkpoint.SetNewCheckpoint(start);

    // Load first scene
    GameManager.LoadScene(Checkpoint.board);

    // Start player tick timer for gravity
    PS.timerStart(5, Player.Tick);
};

PS.keyDown = function (key, shift, ctrl, options) {
    if (key in timerKeys && timerKeys[key] === 0) {
        timerKeys[key] = PS.timerStart(5, controls[key], key);
    } else if (!(key in timerKeys) && heldKeys[key] === false) {
        controls[key]();
        heldKeys[key] = true;
    }
};

PS.keyUp = function (key, shift, ctrl, options) {
    // Stop timer from running
    if (key in timerKeys) {
        PS.timerStop(timerKeys[key]);
        timerKeys[key] = 0;
    }

    // Allow key to be pressed again
    if (key in heldKeys) {
        heldKeys[key] = false;
    }
};
