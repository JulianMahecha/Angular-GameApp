"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    /* Constructor */
    constructor() {
        /* Router */
        this.router = express_1.Router();
        this.config();
    }
    /* Config */
    config() {
        this.router.get('/');
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
