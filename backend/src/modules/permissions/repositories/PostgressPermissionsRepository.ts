import { Permissions } from "../entities/Permissions";
import { IPermissionsRepository, IPermissionsDTO } from "./IPermissionsRepository";
import { postgresql, QueryResultBase } from "../../../database/services/AsyncPostgresql";

export interface QueryResult extends QueryResultBase {
    rows: Permissions[];
};

class PostgressPermissionsRepository implements IPermissionsRepository {
    findByName(title: string): Promise<boolean> {
        return new Promise(async (resolve, reject) => {

            let resultPermissions = await postgresql.query(`
                     SELECT *
                            FROM group_controls               
                                 WHERE
                                     group_controls.group_name = '${title}';
                                 `);

            const { rows }: QueryResult = resultPermissions!;



            if (Boolean(rows[0])) {
                resolve(true);
            } else {
                resolve(false);
            }
        })

    };

    findById(id: number): Promise<boolean> {
        return new Promise(async (resolve, reject) => {

            let resultPermissions = await postgresql.query(`
                     SELECT *
                            FROM group_controls               
                                 WHERE
                                     group_controls.id = '${id}';
                                 `);

            const { rows }: QueryResult = resultPermissions!;

            if (Boolean(rows[0])) {
                resolve(true);
            } else {
                resolve(false);
            }
        })

    };

    list(id?: number): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {

                if (Boolean(id)) {
                    let resultPermissions = await postgresql.query(`
                    SELECT *
                         FROM group_controls               
                                WHERE
                                group_controls.id = '${id}';
                                         `);

                    const { rows }: QueryResult = resultPermissions!;

                    let accVehiclesControls = await postgresql.query(`
                    SELECT  access_create,
                            access_read,
                            access_update,
                            access_delete
                                FROM access_vehicles_controls
                                     where group_id = ${id};
                    `);

                    let accRegisterVehiclesControls = await postgresql.query(`
                    SELECT  access_create,
                            access_read,
                            access_update,
                            access_delete
                                FROM access_register_vehicles_controls
                                     where group_id = ${id};
                    `);

                    let accGroupControls = await postgresql.query(`
                    SELECT  access_create,
                            access_read,
                            access_update,
                            access_delete
                                FROM access_group_controls
                                     where group_id = ${id};
                    `);

                    let accExpensesControls = await postgresql.query(`
                    SELECT  access_create,
                            access_read,
                            access_update,
                            access_delete
                                FROM access_expenses_controls
                                     where group_id = ${id};
                    `);

                    let accDashboardControls = await postgresql.query(`
                    SELECT  access_create,
                            access_read,
                            access_update,
                            access_delete
                                FROM access_dashboard_controls
                                     where group_id = ${id};
                    `);

                    let accCategoriesControls = await postgresql.query(`
                    SELECT  access_create,
                            access_read,
                            access_update,
                            access_delete
                                FROM access_categories_controls
                                     where group_id = ${id};
                    `);

                    let AccAuthorizationsCategories = await postgresql.query(`
                    SELECT  access_create,
                            access_read,
                            access_update,
                            access_delete
                                FROM access_authorizations_categories_controls
                                     where group_id = ${id};
                    `);

                    let AccUsersControls = await postgresql.query(`
                    SELECT  access_create,
                            access_read,
                            access_update,
                            access_delete
                                FROM access_users_controls
                                     where group_id = ${id};
                    `);

                    if (Boolean(accVehiclesControls!.rows) &&
                        Boolean(accRegisterVehiclesControls!.rows) &&
                        Boolean(accGroupControls!.rows) &&
                        Boolean(accExpensesControls!.rows) &&
                        Boolean(accDashboardControls!.rows) &&
                        Boolean(accCategoriesControls!.rows) &&
                        Boolean(AccAuthorizationsCategories!.rows) &&
                        Boolean(AccUsersControls!.rows)) {
                        resolve({
                            id,
                            message: "Permissões carregadas com sucesso!",
                            accVehiclesControls: accVehiclesControls!.rows,
                            accRegisterVehiclesControls: accRegisterVehiclesControls!.rows,
                            accGroupControls: accGroupControls!.rows,
                            accExpensesControls: accExpensesControls!.rows,
                            accDashboardControls: accDashboardControls!.rows,
                            accCategoriesControls: accCategoriesControls!.rows,
                            accAuthorizationsCategories: AccAuthorizationsCategories!.rows,
                            AccUsersControls: AccUsersControls!.rows
                        });

                    } else {
                        resolve([]);
                    }

                    return
                }

                let resultPermissions = await postgresql.query(`
                    SELECT *
                         FROM group_controls              
                         ORDER BY created_on DESC     
                         ;`);

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

    async create({
        title,
        description,
        permissionGroups,
        categories,
        authorizationsCategories,
        dashboard,
        expenses,
        listVehicles,
        registerVehicles,
        userAdministration,
        userID
    }: IPermissionsDTO): Promise<boolean> {

        return new Promise(async (resolve, reject) => {
            try {

                let resultNewGroup = await postgresql.query(`
                INSERT INTO group_controls (group_name, group_description, user_id )
                     VALUES (       
                            '${String(title).toLowerCase()}',   
                            '${String(description).toLowerCase()}',
                            '${userID}'                           
                             )
                  RETURNING id;
                             `);


                const accRegisterVehicles = await postgresql.query(`
                    INSERT INTO access_register_vehicles_controls (group_id, access_create, access_read, access_update, access_delete)
                        VALUES (       
                                '${resultNewGroup?.rows[0].id}',   
                                '${registerVehicles.create}',
                                '${registerVehicles.read}',  
                                '${registerVehicles.update}',      
                                '${registerVehicles.delete}'                         
                                              );`
                );


                let accListVehicles = await postgresql.query(`
                    INSERT INTO access_vehicles_controls (group_id, access_create, access_read, access_update, access_delete)
                            VALUES (       
                                    '${resultNewGroup?.rows[0].id}',   
                                    '${listVehicles.create}',
                                    '${listVehicles.read}',  
                                    '${listVehicles.update}',      
                                    '${listVehicles.delete}'                         
                             );`
                );

                let accAccessExpenses = await postgresql.query(`
                 INSERT INTO access_expenses_controls (group_id, access_create, access_read, access_update, access_delete)
                VALUES (       
                        '${resultNewGroup?.rows[0].id}',   
                        '${expenses.create}',
                        '${expenses.read}',  
                        '${expenses.update}',      
                        '${expenses.delete}'                         
                 );`
                );

                let accDashboard = await postgresql.query(`
                     INSERT INTO access_dashboard_controls (group_id, access_create, access_read, access_update, access_delete)
                VALUES (       
                        '${resultNewGroup?.rows[0].id}',   
                        '${dashboard.create}',
                        '${dashboard.read}',  
                        '${dashboard.update}',      
                        '${dashboard.delete}'                         
                 );`
                );

                let accCategories = await postgresql.query(`
                  INSERT INTO access_categories_controls (group_id, access_create, access_read, access_update, access_delete)
                VALUES (       
                        '${resultNewGroup?.rows[0].id}',   
                        '${categories.create}',
                        '${categories.read}',  
                        '${categories.update}',      
                        '${categories.delete}'                         
                 );`
                );

                let accAuthorizationsCategories = await postgresql.query(`
                 INSERT INTO access_authorizations_categories_controls (group_id, access_create, access_read, access_update, access_delete)
                VALUES (       
                        '${resultNewGroup?.rows[0].id}',   
                        '${authorizationsCategories.create}',
                        '${authorizationsCategories.read}',  
                        '${authorizationsCategories.update}',      
                        '${authorizationsCategories.delete}'                         
                 );`
                );

                let accAccessGroup = await postgresql.query(`
                     INSERT INTO access_group_controls (group_id, access_create,access_read, access_update, access_delete)
                VALUES (       
                        '${resultNewGroup?.rows[0].id}',   
                        '${permissionGroups.create}',
                        '${permissionGroups.read}',  
                        '${permissionGroups.update}',      
                        '${permissionGroups.delete}'                         
                 );`
                );

                let accAccessUsers = await postgresql.query(`
                      INSERT INTO access_users_controls (group_id, access_create,access_read, access_update, access_delete)
                VALUES (       
                        '${resultNewGroup?.rows[0].id}',   
                        '${userAdministration.create}',
                        '${userAdministration.read}',  
                        '${userAdministration.update}',      
                        '${userAdministration.delete}'                         
                 );`
                );

                if (
                    Boolean(accAccessUsers) &&
                    Boolean(accRegisterVehicles) &&
                    Boolean(accAuthorizationsCategories) &&
                    Boolean(accAccessGroup) &&
                    Boolean(accCategories) &&
                    Boolean(accDashboard) &&
                    Boolean(accAccessExpenses) &&
                    Boolean(accListVehicles) &&
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

    delete(id: number): Promise<Permissions[]> {
        throw new Error("Method not implemented.");
    };

    async update({
        id,
        title,
        description,
        permissionGroups,
        categories,
        authorizationsCategories,
        dashboard,
        expenses,
        listVehicles,
        registerVehicles,
        userAdministration,
        userID
    }: IPermissionsDTO): Promise<boolean> {

        return new Promise(async (resolve, reject) => {
            try {

                let resultNewGroup = await postgresql.query(
                    `    
                        UPDATE group_controls 
                                SET 
                                    user_id='${userID}',
                                    group_name='${String(title).toLowerCase()}',
                                    group_description='${String(description).toLowerCase()}',
                                    updated_at='${new Date(Date.now()).toISOString()}'                         
                                          WHERE group_controls.id = ${id}
                                    RETURNING *;
                              `
                );
             

                const accRegisterVehicles = await postgresql.query(`
                UPDATE access_register_vehicles_controls 
                            SET
                            access_create= '${registerVehicles.create}',
                            access_read= '${registerVehicles.read}',  
                            access_update= '${registerVehicles.update}',     
                            access_delete= '${registerVehicles.delete}' 
                              WHERE access_register_vehicles_controls.group_id = ${id}   
                     ;`);


                let accListVehicles = await postgresql.query(`
                UPDATE access_vehicles_controls
                         SET
                            access_create= '${listVehicles.create}',
                            access_read= '${listVehicles.read}',  
                            access_update= '${listVehicles.update}',     
                            access_delete= '${listVehicles.delete}' 
                                 WHERE access_vehicles_controls.group_id = ${id}    
                     ;`
                );

                let accAccessExpenses = await postgresql.query(`
                UPDATE access_expenses_controls 
                        SET
                            access_create= '${expenses.create}',
                            access_read= '${expenses.read}',  
                            access_update= '${expenses.update}',     
                            access_delete= '${expenses.delete}' 
                                 WHERE access_expenses_controls.group_id = ${id}                          
                 ;`
                );

                let accDashboard = await postgresql.query(`
                UPDATE access_dashboard_controls 
                     SET
                            access_create= '${dashboard.create}',
                            access_read= '${dashboard.read}',  
                            access_update= '${dashboard.update}',     
                            access_delete= '${dashboard.delete}' 
                     WHERE access_dashboard_controls.group_id = ${id} 
                ;`
                );

                let accCategories = await postgresql.query(`
                UPDATE access_categories_controls
                     SET
                            access_create= '${categories.create}',
                            access_read= '${categories.read}',  
                            access_update= '${categories.update}',     
                            access_delete= '${categories.delete}' 
                     WHERE access_categories_controls.group_id = ${id}                       
                ;`
                );

                let accAuthorizationsCategories = await postgresql.query(`
                UPDATE access_authorizations_categories_controls 
                    SET
                            access_create= '${authorizationsCategories.create}',
                            access_read= '${authorizationsCategories.read}',  
                            access_update= '${authorizationsCategories.update}',     
                            access_delete= '${authorizationsCategories.delete}' 
                     WHERE access_authorizations_categories_controls.group_id = ${id}                          
                 ;`
                );

                let accAccessGroup = await postgresql.query(`
                UPDATE access_group_controls
                    SET        
                        access_create= '${permissionGroups.create}',
                        access_read= '${permissionGroups.read}',  
                        access_update= '${permissionGroups.update}',     
                        access_delete= '${permissionGroups.delete}' 
                     WHERE access_group_controls.group_id = ${id}                         
                 ;`
                );

                let accAccessUsers = await postgresql.query(`
                UPDATE access_users_controls 
                     SET      
                        access_create= '${userAdministration.create}',
                        access_read= '${userAdministration.read}',  
                        access_update= '${userAdministration.update}',     
                        access_delete= '${userAdministration.delete}' 
                     WHERE access_users_controls.group_id = ${id}                        
                 ;`
                );

                if (
                    Boolean(accAccessUsers) &&
                    Boolean(accRegisterVehicles) &&
                    Boolean(accAuthorizationsCategories) &&
                    Boolean(accAccessGroup) &&
                    Boolean(accCategories) &&
                    Boolean(accDashboard) &&
                    Boolean(accAccessExpenses) &&
                    Boolean(accListVehicles) &&
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

}

export { PostgressPermissionsRepository };
