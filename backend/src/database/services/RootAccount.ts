import { postgresql, QueryResultBase } from "../services/AsyncPostgresql";
import {
    cryptoHashInstancia
} from "../../util/cryptoHash";

interface accounts {
    user_id: number;
    username: string;
    name: string;
    last_name: string;
    email: string;
    created_on?: string;
    updated_on?: string;
}
interface QueryResult extends QueryResultBase {
    rows: accounts[];
}

class RootAccount {

    public createRootAccount = () => {
        this.rootAccount();
    }

    private async checkAccountAlreadyExists(postgresql: any): Promise<boolean> {

        return new Promise(async (resolve, reject) => {
            try {
                let resultAccounts = await postgresql.query(` SELECT * FROM accounts
                WHERE email = 'israelludolf@icloud.com';
                     `);

                const { rows }: QueryResult = resultAccounts!;

                if (rows.length > 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            } catch (error) {
                console.error(error)
            }
        })

    };

    private async rootAccount(): Promise<void> {
        try {

            let accounIsExists = await this.checkAccountAlreadyExists(postgresql);

            return new Promise(async (resolve, reject) => {
                try {
                    if (!accounIsExists) {

                        let resultAccounts = await postgresql.query(`
                                    INSERT INTO accounts (username, name, last_name, email, isAdmin)
                                         VALUES (       
                                                'israel.laureth',
                                                'israel',
                                                'ludolf',                     
                                                'israellaureth@icloud.com',
                                                ${true}  
                                                 )
                                      RETURNING user_id;
                                                 `);

                        const { rows }: QueryResult = resultAccounts!;

                        let createPasswodHash = cryptoHashInstancia.hash('Global!', cryptoHashInstancia.createGenerateSalt(12));

                        //acc_authentications
                        await postgresql.query(`
                                       INSERT INTO acc_authentications (salt, password, user_id)
                                        VALUES (       
                                                 '${createPasswodHash.salt}',
                                                 '${createPasswodHash.hashedpassword}',
                                                  ${rows[0].user_id}                                 
                                                )
                                               ;
                                             `);
                        //acc_profiles
                        await postgresql.query(`
                                             INSERT INTO acc_profiles (photo, path, user_id)
                                                     VALUES (       
                                                              'profile.jpg',
                                                              'default/profile.jpg',
                                                               ${rows[0].user_id}                                 
                                                             )
                                                            ;
                                                          `);
                    }
                } catch (error) {
                    console.log(error)
                }
            })

        } catch (error) {
            console.error(error)
        }
    }
}

export { RootAccount };