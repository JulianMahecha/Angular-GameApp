import {Request, Response} from 'express'
import pool from '../database'

class GamesController {
    constructor() {
        
    }

    public async list(req: Request, res: Response){
        const games = await pool.query('SELECT * FROM games');
        res.json(games);

    }

    public async create(req: Request, res: Response):Promise<void>{
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({text: 'Game Saved'});
    }

    public delete(req: Request, res: Response){
        res.json({text: 'deleting a game'});
    }

    public async getOne(req: Request, res: Response):Promise<any>{
        const {id} = req.params;
        const game = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        if (game.length) {
            return res.json(game[0]);
        }else{
            res.status(404).json({text:'The game doesn\'t exist'});
        }
        
    }


    public update(req: Request, res: Response){
        res.json({text: 'updating a game'});
    }
}

export const gamesController = new GamesController();