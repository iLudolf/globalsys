class tableAccounts {

    create = (pool: any) => {
        this.createNewTableIfNotExists(pool);
    }

    private createNewTableIfNotExists(pool: any): void {
        try {
            pool.query(`
            CREATE TABLE IF NOT EXISTS accounts (
                user_id serial NOT NULL PRIMARY KEY,
                username VARCHAR ( 50 ) NOT NULL,
                name VARCHAR ( 50 ) NOT NULL,
                last_name VARCHAR ( 50 ) NOT NULL,          
                email VARCHAR UNIQUE NOT NULL,  
                isAdmin boolean NOT NULL,      
                created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                last_login TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                updated_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
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

}

const createTableAccounts = new tableAccounts();

export { createTableAccounts };

