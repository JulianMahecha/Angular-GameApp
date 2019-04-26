import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';
import morgan from 'morgan';
import cors from 'cors';

class Server{
    
    public app:Application;

    /* COnstructor */
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    /* Configuration */
    config():void{
        this.app.set('port', process.env.PORT || 3000); /* Configurando puerto */
        this.app.use(morgan('dev')); /* Usando Morgan */
        this.app.use(cors()); /* Usando Cors */
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    /* Routes */
    routes():void{
        this.app.use(indexRoutes); 
        this.app.use('/api/games', gamesRoutes);
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