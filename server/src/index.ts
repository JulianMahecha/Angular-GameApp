import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';


class Server{
    
    public app:Application;

    /* COnstructor */
    constructor() {
        this.app = express();
        this.config();
    }

    /* Configuration */
    config():void{
        this.app.set('port', process.env.PORT || 3000);
    }

    /* Routes */
    routes():void{

    }

    /* Initial Method (Defines the port of the server and start listen it) */
    start():void{
        let port:number = this.app.get('port');
        this.app.listen(port, () => {
            console.log('Server on port', port);
        });
    }
}

const SERVER = new Server();
SERVER.start();