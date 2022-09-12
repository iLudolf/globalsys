import path from "path";
import fs from "fs";

class Storage {
    private TEMP: string = path.join(__dirname + `../../../data/temp`);
    private STORAGE: string = path.join(__dirname + `../../../data/storage`);  
    private ACCOUNTS: string = path.join(__dirname + `../../../data/storage/accounts`);

    constructor() { }

    private async removeFolderTemp() {
        try {
            if (fs.existsSync(this.TEMP)) {
                fs.rmSync(this.TEMP, { recursive: true, force: true });
                console.info(`The Folder temporary is was Clear`)
            }

        } catch (error) {
            console.error(error);
        }
    }

    private async createExists() {
        try {
            if (!fs.existsSync(this.TEMP)) {
                fs.mkdirSync(this.TEMP);
                console.info(`The temp folder was create`)
            }

            if (!fs.existsSync(this.STORAGE)) {
                fs.mkdirSync(this.STORAGE);
                console.info(`The storage folder was create`)
            }

            if (!fs.existsSync(this.ACCOUNTS)) {
                fs.mkdirSync(this.ACCOUNTS);
                console.info(`The accounts folder was create`)
            }
        } catch (error) {
            console.error(error);
        }
    }

    public async sync() {
        this.removeFolderTemp();
        return this.createExists();
    }

    public async createNewStorageSync(directory: string): Promise<void> {
        if (!fs.existsSync(directory)) {
            return fs.mkdirSync(directory);
        }

    }

    public async moveFile(currentFileLocation: string, newFileLocation: string,) {
        return new Promise((resolve, reject) => {
            const readStream = fs.createReadStream(currentFileLocation);
            const writeStream = fs.createWriteStream(newFileLocation);

            readStream.on('error', err => reject(err));
            writeStream.on('error', err => reject(err));

            writeStream.on('close', function () {
                //Delete file current location
                fs.rmSync(currentFileLocation, { recursive: true, force: true });
            });

            readStream.pipe(writeStream);

            return resolve(true)
        })
    }

    public async removeFolder(directory: string) {

        try {
            if (fs.statSync(directory).isDirectory()) {
                fs.rmSync(directory, { recursive: true, force: true });
                return console.info(`The Folder is was Clear`)
            }
        }
        catch (e: any) {
            if (e.code == 'ENOENT') { // no such file or directory. File really does not exist
                console.log("File does not exist.");
                return false;
            }
            console.log("Exception fs.statSync (" + directory + "): " + e);
            throw e; // something else went wrong, we don't have rights, ...
        }
    }

    public async removeFile(directory: string) {

        try {

            if (fs.statSync(directory).isFile()) {
                fs.rmSync(directory, { recursive: true, force: true });
                return console.info(`The File is was Clear`)
            }
        }
        catch (e: any) {
            if (e.code == 'ENOENT') { // no such file or directory. File really does not exist
                console.log("File does not exist.");
                return false;
            }
            console.log("Exception fs.statSync (" + directory + "): " + e);
            throw e; // something else went wrong, we don't have rights, ...
        }
    }

}

const storage = new Storage();

export { storage };