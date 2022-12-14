import multer from 'multer';
import path from 'path';
import fs from "fs";
import mime from "mime-types";
import { Request } from 'express';

class UploadFile {
    //Pasta para onde será feito o Upload
    private URL: string = path.join(__dirname + `../../../data/temp`);
    constructor() { }


    //Methodo onde armazenaremos nossos arquivos
    private storage(): multer.StorageEngine {
        return multer.diskStorage({
            //Criar o destino do arquivo
            destination: (req, file, callback) => {
                //Verifica se não existe o diretório
                if (!fs.existsSync(this.URL)) {
                    //Efetua a criação do diretório caso ele não exista
                    fs.mkdirSync(this.URL);
                }
                //Define o caminho da pasta
                callback(null, this.URL);
            },
            //Renomeia o arquivo
            filename: (req, file, callback) => {
                //Aqui vamos usar o mime-type para chegar o tipo do arquivo
                //E predefinir como ele veio até nosso sistema
                const type = mime.extension(file.mimetype);

                //Renomeia o nome do arquivo
                //Aqui temos o nome do arquivo gerado pelo Date
                //E colocamos a extensão dele de acordo com o mime-type
                callback(null, `${new Date().getTime()}.${type}`);
            },
        });
    }

    //Methodo onde iremos efetuar o filtro de arquivos
    //Se é valido ou não
    private fileFilter() {
        /*
          Essa configuração vai nos ajudar com 
          1 - A validação do arquivo
        */
        return (
            req: Request,
            file: Express.Multer.File,
            cb: multer.FileFilterCallback
        ) => {
            //Utilizaremos a Lib mime-types para identificar o tipo do arquivo
            const type = mime.extension(file.mimetype);

            /* 
              Este array será montado a conditions de validação
              No caso aceitará apenas imagens como "png", "jpg", "jpeg"
            */
            const conditions = [
                "pdf", "jpg", "jpeg", "mp4", "mp3", "gz",
                "png", "vsd", "txt", "docx", "doc", "csv",
                "tif", "tiff", "svg", "avi", "xls", "xlsx",
                "rar", "pptx", "ppt", "ogv", "7z", "zip"
            ];

            //Perguntamos se existe algum desses valores no type
            if (conditions.includes(`${type}`)) {
                //Caso exista, teremos nossa imagem linda maravilhosa
                cb(null, true);
            }

            //Caso não de certo a validação não efetuaremos o upload
            cb(null, false);
        };
    }

    //Configuração que usaremos em nossas rotas como Middleware
    get getConfig(): multer.Options {
        /*
           Essa configuração vai nos ajudar com 
          1 - A compor as configs do Multer como Middleware em nossas rotas
          2 - Não será um middleware global e sim para usos unicos e comportamentais
        */
        return {
            //Storage serve para compor a config do multer destination e filename
            storage: this.storage(),
            //FileFilter serve para validar o filtro de arquivos
            fileFilter: this.fileFilter(),
        };
    }

}

export const uploadFile = new UploadFile();