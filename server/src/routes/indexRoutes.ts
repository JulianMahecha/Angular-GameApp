import { Router } from 'express';
import { indexController } from '../controllers/indexController';

class IndexRoutes {
    /* Router */
    public router : Router = Router();

    /* Constructor */
    constructor() {
        this.config();
    }

    /* Config */
    config():void{
        this.router.get('/', indexController.index);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;