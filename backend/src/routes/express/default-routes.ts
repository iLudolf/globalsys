

import * as express from 'express';
const defaultRouter = express.Router()

defaultRouter.get('/', function (req: express.Request, res: express.Response) {
    res.json({
        status: "ok",
        message: "Server is running ⚡️",
        date: new Date().toString()
    });
});

export default defaultRouter;