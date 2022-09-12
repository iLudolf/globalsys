import { Pool, Client, QueryResultBase } from 'pg';
import {
    createTableAccounts
} from "../models/accounts/accounts-controls-model";

import {
    createTableAuthentications
} from "../models/accounts/acc-authentication-controls-model";

import {
    createTableProfile
} from "../models/accounts/acc-profile-controls-model";

import {
    RootAccount
} from "./RootAccount";



class AsyncPostgresql {
    connectionString: string;

    constructor() {
        this.connectionString = "";
    }

    private async connection(): Promise<any> {
        const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;

        const pool = new Pool({
            connectionString,
            // ssl: true       
        })

        return pool
    };

    public async syncPostgres(): Promise<void> {
        try {
            let poolOne = await this.connection();
            createTableAccounts.create(poolOne);
            createTableAuthentications.create(poolOne);
            createTableProfile.create(poolOne);
            let root = new RootAccount();
            root.createRootAccount();
            poolOne.end();

            console.log("\n\nAll models have been successfully synced. \n");
        } catch (erro) {
            console.error(erro);
        }
    };

    public async query(text: string, params?: any): Promise<any> {
        try {
            let pool = await this.connection();
            let response = await pool.query(text, params);
            pool.end()
            return response
        } catch (error) {
            console.error(error)
        }
    };
}

const postgresql = new AsyncPostgresql();

export { postgresql, QueryResultBase };


