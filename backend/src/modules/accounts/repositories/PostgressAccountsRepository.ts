import { Accounts } from "../entities/Account";
import { IAccountRepository, IAccountsDTO } from "./IAccountRepository";
import { postgresql, QueryResultBase } from "../../../database/services/AsyncPostgresql";

export interface QueryResult extends QueryResultBase {
    rows: Accounts[];
};
class PostgressAccountsRepository implements IAccountRepository {

    async findByID(id: number): Promise<boolean> {

        return new Promise(async (resolve, reject) => {

            try {
                let resultAccounts = await postgresql.query(`
                        select * from accounts
                            where accounts.user_id = '${id}';
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


    }

    async findByMail(mail: string): Promise<boolean> {

        return new Promise(async (resolve, reject) => {
            try {
                let resultAccounts = await postgresql.query(`
                select * from accounts
                where accounts.email = '${mail}';
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
    }

    list(id?: number): Promise<Accounts[]> {
        return new Promise(async (resolve, reject) => {
            try {
                if (Boolean(id)) {
                    let result = await postgresql.query(`
                    SELECT * FROM accounts
                        WHERE user_id = ${id}
                        `);

                    const { rows }: QueryResult = result!;
                    resolve(rows);
                } else {
                    let result = await postgresql.query(`SELECT *
                    FROM accounts	
                        JOIN acc_profiles
                            ON acc_profiles.user_id = accounts.user_id;
                            `);

                    const { rows }: QueryResult = result!;
                    resolve(rows);
                }
            } catch (error) {
                console.error(error)
            }
        })

    }

    create({ name, lastName, mail, password, type, salt, file }: IAccountsDTO): Promise<Accounts> {

        return new Promise(async (resolve, reject) => {
            try {
                let resultAccounts = await postgresql.query(`
            INSERT INTO accounts (username, name, last_name, email,isadmin)
                 VALUES (       
                        '${name.toLowerCase()}.${lastName.toLowerCase()}',
                        '${name.toLowerCase()}',
                        '${lastName.toLowerCase()}',                     
                        '${mail.toLowerCase()}',
                        ${type}      
                         )
                             RETURNING user_id;
                         `);

                const { rows }: QueryResult = resultAccounts!;



                //acc_authentications
                await postgresql.query(`
                  INSERT INTO acc_authentications (salt, password, user_id)
                        VALUES (       
                         '${salt}',
                         '${password}',
                          ${rows[0].user_id}                                 
                        )
                       ;
                     `);
                //acc_profiles
                await postgresql.query(`
                     INSERT INTO acc_profiles (photo, path, user_id)
                             VALUES (       
                                      '${file!.originalname}',
                                      '${file!.path}',
                                       ${rows[0].user_id}                                 
                                     )
                                    ;
                                  `);

                return resolve(Object.assign(rows))
            } catch (error) {
                console.error(error)
            }
        })
    }

    delete(id: number): Promise<Accounts[]> {
        return new Promise(async (resolve, reject) => {

            try {
                await postgresql.query(`
            DELETE FROM acc_profiles
                    WHERE user_id = ${id}
                ;`);

                await postgresql.query(`
            DELETE FROM acc_authentications
                    WHERE user_id = ${id}
                ;`);

                let result = await postgresql.query(`
                DELETE FROM accounts
                        WHERE user_id = ${id}
                            RETURNING *;
                    `);

                postgresql.query(`
                    DELETE FROM group_users_controls
                            WHERE user_id = ${id}
                        ;`);

                const { rows }: QueryResult = result!;
                resolve(rows);
            } catch (error) {
                console.error(error)
            }
        })
    }

    update({ name, lastName, mail, password, id }: IAccountsDTO): Promise<Accounts[]> {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await postgresql.query(`
                UPDATE accounts 
                    SET                        
                        name ='${name.toLowerCase()}',
                        last_name ='${lastName.toLowerCase()}',                         
                        email ='${mail.toLowerCase()}'                                           
                WHERE accounts.user_id = '${id}'
                        RETURNING *;
            `);

                const { rows }: QueryResult = result!;
                resolve(rows);
            } catch (error) {
                console.error(error)
            }
        })
    }
}

export { PostgressAccountsRepository }