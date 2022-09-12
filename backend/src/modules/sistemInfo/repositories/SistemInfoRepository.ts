import { SistemInfo } from "../entities/SistemInfo";
import { ISistemInfoRepository } from "./ISistemInfoRepository";
import { readdir, stat } from 'fs/promises';
import * as path from 'path';
import os from 'os';


class SistemInfoRepository implements ISistemInfoRepository {
    MemoryUsage(): Promise<any> {

        return new Promise(async (resolve, reject) => {
            let totalmem = (os.freemem() * 100 / os.totalmem());
            return resolve(totalmem);
        })


    };

    async checkSizeStorage(): Promise<any> {

        return new Promise(async (resolve, reject) => {
            const files = await readdir((__dirname + '../../../../data/storage'), { withFileTypes: true });

            const paths: any = files.map(async file => {
                const sizeDataStorage = path.join((__dirname + '../../../../data/storage'), file.name);

                if (file.isFile()) {
                    const { size } = await stat(sizeDataStorage);
                    return size;
                }

                return resolve(0);
            });

            return resolve((await Promise.all(paths)).flat(Infinity).reduce((i, size) => i + size, 0));
        })
    };

    async getProcessadorInfo(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            let cpu = os.cpus();
            return resolve(cpu)
        })

    };

}

export { SistemInfoRepository };


// https://www.geeksforgeeks.org/node-js-os-loadavg-method/
// https://stackoverflow.com/questions/36816181/get-view-memory-cpu-usage-via-nodejs