class tableAuthentications {
    create = (pool: any) => {
        this.createNewTableIfNotExists(pool);
    }
    private createNewTableIfNotExists(pool: any): void {
        try {
            pool.query(`
            CREATE TABLE IF NOT EXISTS acc_authentications (
                id serial NOT NULL PRIMARY KEY,
                salt VARCHAR ( 50 ) NOT NULL,
                password VARCHAR ( 128 ) NOT NULL,
                user_id serial references accounts(user_id),        
                created_On TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                updated_At TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
            `, (err: any, res: any) => {

                if (err) {
                    console.error(err)
                }
            })
        } catch (error) {
            console.error(error)
        }
    }

};

const createTableAuthentications = new tableAuthentications();

export { createTableAuthentications };