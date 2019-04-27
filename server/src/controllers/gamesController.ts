import {Request, Response} from 'express'
import pool from '../database'

class GamesController {
    constructor() {
        
    }

    public games(req: Request, res: Response){
        pool.query('DESCRIBE games');
        
    }
}

export const gamesController = new GamesController();