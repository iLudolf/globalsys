import { Authentication } from "../entities/Authentication";
import { IAuthenticationRepository, IAuthenticationDTO, IAccAuthenticationDTO } from "./IAuthenticationRepository";
import { postgresql, QueryResultBase } from "../../../database/services/AsyncPostgresql";

interface queryResult extends QueryResultBase {
    rows: IAuthenticationDTO[]
}

class PostgressAuthenticationRepository implements IAuthenticationRepository {
    findByMail(email: string): Promise<number> {
        return new Promise(async (resolve, reject) => {
            try {
                let itExist = await postgresql.query(`
                SELECT *
                    FROM accounts               
                WHERE
                    accounts.email = '${email.toLowerCase()}';
            `);
                const { rows }: queryResult = itExist!;

                if (rows.length > 0) {
                    const id: number = rows[0]!.user_id!;
                    resolve(id);
                } else {
                    resolve(-1);
                }
            } catch (error) {
                console.error(error)
            }
        })
    };

    login({ user_id }: IAuthenticationDTO): Promise<IAccAuthenticationDTO[]> {
        return new Promise(async (resolve, reject) => {
            try {

                let authentications = await postgresql.query(`
                SELECT *
                FROM accounts
                    JOIN acc_authentications
                        ON acc_authentications.user_id = accounts.user_id
                    JOIN acc_profiles
                        ON acc_profiles.user_id = accounts.user_id
                WHERE
                    accounts.user_id = '${user_id}';
                        `);

                const { rows }: queryResult = authentications!;
               
                await postgresql.query(`
                UPDATE accounts
                   SET last_login = (to_timestamp(${Date.now()} / 1000.0))
                       WHERE user_id = ${user_id}
                          ;`);


                resolve(Object.assign(rows))

            } catch (error) {
                console.error(error)
            }
        });
    };

    logout({ user_id }: IAuthenticationDTO): Promise<Authentication> {
        throw new Error("Method not implemented.");
    };

    reset(id: number): Promise<Authentication[]> {
        throw new Error("Method not implemented.");
    };

}

export { PostgressAuthenticationRepository };