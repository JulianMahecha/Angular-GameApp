import {Request, Response} from 'express'
import pool from '../database'

class GamesController {
    constructor() {
        
    }

    public list(req: Request, res: Response){
        res.json({text: 'listing games'});

    }

    public async create(req: Request, res: Response):Promise<void>{
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({text: 'Game Saved'});
    }

    public delete(req: Request, res: Response){
        res.json({text: 'deleting a game'});
    }

    public getOne(req: Request, res: Response){
        res.json({text: 'get only one game'});
    }


    public update(req: Request, res: Response){
        res.json({text: 'updating a game'});
    }
}

export const gamesController = new GamesController();