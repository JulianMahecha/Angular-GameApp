"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class GamesRoutes {
    /* Constructor */
    constructor() {
        /* Router */
        this.router = express_1.Router();
        this.config();
    }
    /* Config */
    config() {
        this.router.get('/', (req, res) => res.send('Games'));
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
