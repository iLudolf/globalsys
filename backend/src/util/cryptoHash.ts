'use strict';
import * as crypto from 'crypto';

interface hashProps {
    salt: string;
    hashedpassword: string;
}

class cryptoHash {
    salt?: string;
    hashedpassword?: string;
    password?: string;

    constructor() {
    }

    createGenerateSalt(rounds: any) {
        if (rounds >= 15) {
            throw new Error(`${rounds} é maior que 15, deve ser menor que 15`);
        }
        if (typeof rounds !== 'number') {
            throw new Error('o parâmetro rounds deve ser um número');
        }
        if (rounds == null) {
            rounds = 12;
        }
        return crypto.randomBytes(Math.ceil(rounds / 2)).toString('hex').slice(0, rounds);
    }

    createHasher(password: string, salt: string) {
        let hash = crypto.createHmac('sha512', salt);
        hash.update(password);
        let value = hash.digest('hex');
        return {
            salt: salt,
            hashedpassword: value
        };
    }

    hash(password: string, salt: string) {
        if (password == null || salt == null) {
            throw new Error(' Deve fornecer senha e valores de salt');
        }
        if (typeof password !== 'string' || typeof salt !== 'string') {
            throw new Error('A senha deve ser uma string e o salt deve ser uma string salt ou um número de rounds');
        }
        return this.createHasher(password, salt);
    }

    comparePassword(password: string, hash: hashProps) {
        if (password == null || hash == null) {
            throw new Error('senha e hash são necessários para comparar');
        }
        if (typeof password !== 'string' || typeof hash !== 'object') {
            throw new Error('a senha deve ser uma string e o hash deve ser um objeto');
        }
        let passwordData = this.createHasher(password, hash.salt);
        if (passwordData.hashedpassword === hash.hashedpassword) {
            return true;
        }
    }

}

const cryptoHashInstancia = new cryptoHash();

export { cryptoHashInstancia };