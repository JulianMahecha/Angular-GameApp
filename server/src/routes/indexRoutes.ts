import { Router } from 'express';

class IndexRoutes {
    /* Router */
    public router : Router = Router();

    /* Constructor */
    constructor() {
        this.config();
    }

    /* Config */
    config():void{
        this.router.get('/', (req, res) => res.send('Hello'));
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;