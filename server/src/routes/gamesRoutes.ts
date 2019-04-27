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
        this.router.post('/', gamesController.create); /* POST Petition */
        this.router.delete('/:id', gamesController.delete); /* POST Petition */
        this.router.put('/:id', gamesController.update); /* POST Petition */
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;