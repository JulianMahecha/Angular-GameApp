"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = require("../controllers/gamesController");
class GamesRoutes {
    /* Constructor */
    constructor() {
        /* Router */
        this.router = express_1.Router();
        this.config();
    }
    /* Config */
    config() {
        this.router.get('/', gamesController_1.gamesController.games);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
