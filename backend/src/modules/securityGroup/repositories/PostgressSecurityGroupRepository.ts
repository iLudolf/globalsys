import { SecurityGroup } from "../entities/SecurityGroup";
import { ISecurityGroupRepository, ISecurityGroupDTO } from "./IPermissionsRepository";
import { postgresql, QueryResultBase } from "../../../database/services/AsyncPostgresql";

export interface QueryResult extends QueryResultBase {
    rows: SecurityGroup[];
};

interface IListAllUser extends QueryResultBase {
    rows: [{
        user_id: string;
        group_controls_id: string;
        username: string;
        path: string;
    }]
}


interface IFindGroupUsers extends QueryResultBase {
    rows: [{
        id: string;
    }]
}


class PostgressSecurityGroupRepository implements ISecurityGroupRepository {

    findById({
        groupControlsID,
        userID
    }: ISecurityGroupDTO): Promise<boolean> {
        return new Promise(async (resolve, reject) => {

            let resultSecurityGroup = await postgresql.query(`
                     SELECT *
                            FROM group_users_controls               
                                 WHERE
                                     group_users_controls.user_id = '${userID}'
                                  AND
                                     group_users_controls.group_controls_id = '${groupControlsID}';
                                 `);

            const { rows }: QueryResult = resultSecurityGroup!;

            if (rows.length <= 0) {
                resolve(false);
            } else {
                resolve(true);
            }
        })

    };

    findGroupUsers({
        groupControlsID
    }: ISecurityGroupDTO): Promise<boolean> {
        return new Promise(async (resolve, reject) => {


            let resultSecurityGroup = await postgresql.query(`
                SELECT
                    id
                FROM
                    group_users_controls
                WHERE
                    group_users_controls.group_controls_id =${groupControlsID};
                                 `);

            const { rows }: IFindGroupUsers = resultSecurityGroup!;

            if (rows.length <= 0) {
                resolve(false);
            } else {
                resolve(true);
            }
        })

    };

    list(id?: number): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {

                if (Boolean(id)) {
                    let resultSecurityGroup = await postgresql.query(`                   
                    SELECT
                        accounts.user_id,
                        group_users_controls.group_controls_id,
                        accounts.username,
                        accounts.email,
                        acc_profiles.path
                    FROM
                        group_users_controls
                        INNER JOIN accounts ON accounts.user_id = group_users_controls.user_id
                        INNER JOIN acc_profiles ON acc_profiles.user_id = group_users_controls.user_id
                    WHERE
                        group_users_controls.group_controls_id = ${id};
                    `);

                    const { rows }: QueryResult = resultSecurityGroup!;


                    if (
                        Boolean(resultSecurityGroup!.rows)
                    ) {
                        resolve({
                            rows
                        });

                    } else {
                        resolve([]);
                    }

                    return
                }

                let resultPermissions = await postgresql.query(`
                SELECT
                     accounts.user_id,
                     group_users_controls.group_controls_id,
                     accounts.username,
                     accounts.email,
                     acc_profiles.path
                FROM
                    group_users_controls
                    INNER JOIN accounts ON accounts.user_id = group_users_controls.user_id
                    INNER JOIN acc_profiles ON acc_profiles.user_id = group_users_controls.user_id      
                `);

                const { rows }: QueryResult = resultPermissions!;

                if (rows.length > 0) {
                    resolve(rows);
                } else {
                    resolve([]);
                }
            } catch (error) {
                console.error(error)
            }

        })
    };

    listAllUser(id: number): Promise<any> {
        return new Promise(async (resolve, reject) => {

            let resultSecurityGroup = await postgresql.query(`                   
            SELECT
                accounts.user_id,
                group_users_controls.group_controls_id,
                accounts.username,
                accounts.last_name,
                accounts.name,
                accounts.email,
                acc_profiles.path
            FROM
                group_users_controls
                INNER JOIN accounts ON accounts.user_id = group_users_controls.user_id
                INNER JOIN acc_profiles ON acc_profiles.user_id = group_users_controls.user_id
            WHERE
                accounts.user_id NOT IN (
                    SELECT
                    accounts.user_id
                FROM
                    accounts,
                    group_users_controls
                WHERE
                    group_users_controls.user_id = accounts.user_id
                    AND group_users_controls.group_controls_id = ${id} )      

            `);

            const { rows }: IListAllUser = resultSecurityGroup!;


            if (
                Boolean(resultSecurityGroup!.rows)
            ) {
                resolve({
                    rows
                });

            } else {
                resolve([]);
            }
        })
    };

    async create({
        groupControlsID,
        userID
    }: ISecurityGroupDTO): Promise<boolean> {

        return new Promise(async (resolve, reject) => {
            try {

                let resultNewGroup = await postgresql.query(`
                INSERT INTO group_users_controls (group_controls_id, user_id)
                     VALUES (       
                            '${groupControlsID}',                           
                            '${userID}'                           
                             )
                  RETURNING id;
                             `);


                if (
                    Boolean(resultNewGroup)
                ) {
                    resolve(true);
                } else {
                    resolve(false);
                }


            } catch (error) {
                console.error(error)
            }
        })
    };

    delete({
        groupControlsID,
        userID
    }: ISecurityGroupDTO): Promise<SecurityGroup[]> {

        return new Promise(async (resolve, reject) => {

            try {
                let result = await postgresql.query(`
            DELETE FROM group_users_controls
                    WHERE group_controls_id = ${groupControlsID}
                    AND user_id = ${userID}
                ;`);

                const { rows }: QueryResult = result!;
                resolve(rows);
            } catch (error) {
                console.error(error)
            }
        })
    };

    async update({
        groupControlsID,
        userID
    }: ISecurityGroupDTO): Promise<boolean> {

        return new Promise(async (resolve, reject) => {
            try {

                throw new Error("Method not implemented.");

            } catch (error) {
                console.error(error)
            }
        })
    };

}

export { PostgressSecurityGroupRepository };
