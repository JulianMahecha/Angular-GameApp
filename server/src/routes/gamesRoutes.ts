import { Router } from 'express';
import { gamesController } from '../controllers/gamesController';

class GamesRoutes {
    /* Router */
    public router : Router = Router();

    /* Constructor */
    constructor() {
        this.config();
    }

    /* Config */
    config():void{
        this.router.get('/', gamesController.games);
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;