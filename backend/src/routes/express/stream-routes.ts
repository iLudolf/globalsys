import * as express from 'express';
import path from "path";
import fs from "fs";
import send from 'send';
import { streamFile } from "../../shared/Stream/stream";


const streamRouter = express.Router();

streamRouter.post('/', async function (req: express.Request, res: express.Response) {

    const { pathFile, minetype } = req.body;

    streamFile.createStream(pathFile, minetype, res);

});

export default streamRouter;