"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GamesController {
    constructor() {
    }
    games(req, res) {
        res.send('Games');
    }
}
exports.gamescontroller = new GamesController();
