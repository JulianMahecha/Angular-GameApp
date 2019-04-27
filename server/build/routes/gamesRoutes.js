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
        this.router.get('/', gamesController_1.gamesController.list); /* Get List */
        this.router.get('/:id', gamesController_1.gamesController.getOne); /* Get One */
        this.router.post('/', gamesController_1.gamesController.create); /* POST Petition */
        this.router.delete('/:id', gamesController_1.gamesController.delete); /* POST Petition */
        this.router.put('/:id', gamesController_1.gamesController.update); /* POST Petition */
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
