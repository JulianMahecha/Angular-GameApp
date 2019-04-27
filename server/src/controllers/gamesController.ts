import {Request, Response} from 'express'
import pool from '../database'

class GamesController {
    constructor() {
        
    }

    public games(req: Request, res: Response){
        pool.query('DESCRIBE games');

    }

    public create(req: Request, res: Response){
        res.json({text: 'creating a game'});
    }

    public delete(req: Request, res: Response){
        res.json({text: 'deleting a game'});
    }

    public update(req: Request, res: Response){
        res.json({text: 'updating a game'});
    }
}

export const gamesController = new GamesController();