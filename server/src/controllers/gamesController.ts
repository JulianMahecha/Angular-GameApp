import {Request, Response} from 'express'

class GamesController {
    constructor() {
        
    }

    public games(req: Request, res: Response){
        res.send('Games')
    }
}

export const gamesController = new GamesController();