import { Router } from 'express';

class GamesRoutes {
    /* Router */
    public router : Router = Router();

    /* Constructor */
    constructor() {
        this.config();
    }

    /* Config */
    config():void{
        this.router.get('/', (req, res) => res.send('Games'));
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;