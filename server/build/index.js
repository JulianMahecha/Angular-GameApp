"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
class Server {
    /* COnstructor */
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    /* Configuration */
    config() {
        this.app.set('port', process.env.PORT || 3000);
    }
    /* Routes */
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
    }
    /* Initial Method (Defines the port of the server and start listen it) */
    start() {
        let port = this.app.get('port');
        this.app.listen(port, () => {
            console.log('Server on port', port);
        });
    }
}
const SERVER = new Server();
SERVER.start();
