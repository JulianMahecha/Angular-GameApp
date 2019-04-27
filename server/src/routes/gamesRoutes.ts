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
        this.router.get('/', );
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;