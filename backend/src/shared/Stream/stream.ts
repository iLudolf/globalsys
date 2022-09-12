import path from "path";
import fs from "fs";
import * as express from 'express';

class Stream {

    private STORAGE: string = path.join(__dirname + `../../../data/`);

    constructor() { }

    public async createStream(
        pathFile: string,
        minetype: string,
        res: express.Response
    ) {
        try {
            var readfile = fs.createReadStream(`${this.STORAGE}/${pathFile}`);
            res.contentType(minetype);
            res.setHeader('Content-Disposition', `inline`)

            return readfile.pipe(res);
        } catch (error) {
            console.error(error)
        }
    }

}

const streamFile = new Stream();

export { streamFile };