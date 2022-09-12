import { Kaizens } from "../entities/Kaizens";
import {
    IKaizenRepository,
    IKaizensDTO,
    IKaizensInfoDTO,
    IKaizenDeleteDTO,
    IKaizensOverviewDTO,
    IKaizenDocsDTO,
    IKaizenPhotosDTO,
    IKaizenOverviewDTO,
    FileDTO
} from "./IKaizensRepository";
import { postgresql, QueryResultBase } from "../../../database/services/AsyncPostgresql";

export interface QueryResult extends QueryResultBase {
    rows: Kaizens[];
};

class PostgressKaizensRepository implements IKaizenRepository {

    findOverviewByID(id: number): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await postgresql.query(`
                        select * from kaizen_overview
                            where kaizen_overview.kaizen_id = '${id}';
                                 `);

                const { rows }: QueryResult = result!;

                if (rows.length == 0) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            } catch (error) {
                console.error(error)
            }

        })
    }

    async findByID(id: number): Promise<boolean> {

        return new Promise(async (resolve, reject) => {
            try {
                let result = await postgresql.query(`
                        select * from kaizens
                            where kaizens.id = '${id}';
                                 `);

                const { rows }: QueryResult = result!;

                if (rows.length == 0) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            } catch (error) {
                console.error(error)
            }

        })


    }

    list(category?: string): Promise<Kaizens[]> {
        return new Promise(async (resolve, reject) => {
            try {
                if (Boolean(category)) {
                    let result = await postgresql.query(`
                    SELECT
                        *
                    FROM
                        kaizens
                        JOIN kaizen_profiles ON kaizen_profiles.kaizen_id = kaizens.id
                    WHERE kaizens.category = '${category}'
                    ORDER BY
                    kaizens.date DESC,
                    kaizens.type DESC;
                    ;
                        `);

                    const { rows }: QueryResult = result!;
                    resolve(rows);
                } else {
                    let result = await postgresql.query(`   
                    SELECT
                         *
                    FROM
                        kaizens
                        JOIN kaizen_profiles ON kaizen_profiles.kaizen_id = kaizens.id
                    ORDER BY
                        kaizens.date DESC,
                        kaizens.type DESC;`
                    );

                    const { rows }: QueryResult = result!;
                    resolve(rows);
                }
            } catch (error) {
                console.error(error)
            }
        })

    }

    listInfo(): Promise<IKaizensInfoDTO[]> {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await postgresql.query(`   
                SELECT
                    category,
                    COUNT(kaizens.category)
                FROM
                    kaizens
                GROUP BY
                    category;
                ;`
                );

                const { rows }: any = result!;

                resolve(rows);
            } catch (error) {
                console.error(error)
            }
        })
    }

    seachKaizen(value: string, category: string): Promise<IKaizensInfoDTO[]> {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await postgresql.query(`
            SELECT
                *
            FROM
                kaizens
                JOIN kaizen_profiles ON kaizen_profiles.kaizen_id = kaizens.id    
            WHERE
                 kaizens.category = '${category}' AND
                 kaizens.first_name LIKE '${value}%'
                `);

                const { rows }: any = result!;
       
                resolve(rows);
            } catch (error) {
                console.error(error)
            }
        })
    }


    listKaizen(id: number): Promise<IKaizensOverviewDTO[]> {
        return new Promise(async (resolve, reject) => {

            let result = await postgresql.query(`
            SELECT
                *
            FROM
                kaizens as geral
                JOIN kaizen_profiles ON kaizen_profiles.kaizen_id = geral.id    
            WHERE
                geral.id = ${id}
                `);

            resolve(result.rows);
        })

    }

    listKaizenOverview(id: number): Promise<IKaizensOverviewDTO[]> {
        return new Promise(async (resolve, reject) => {

            let result = await postgresql.query(`
            SELECT
                *
            FROM
                kaizens 
                JOIN kaizen_overview ON kaizen_overview.kaizen_id = kaizens.id    
            WHERE
                kaizens.id = ${id}
                    `);

            resolve(result.rows);
        })

    }

    listKaizenDocs(id: number): Promise<IKaizenDocsDTO[]> {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await postgresql.query(`
                        select * from kaizen_docs
                            where kaizen_docs.kaizen_id = '${id}';
                                 `);

                const { rows } = result!;
                resolve(rows);
            } catch (error) {
                console.error(error)
            }

        })
    }

    listKaizenPhotos(id: number): Promise<IKaizenPhotosDTO[]> {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await postgresql.query(`
                        select * from kaizen_photos
                            where kaizen_photos.kaizen_id = '${id}'
                                 ORDER BY kaizen_photos.created_on desc;
                            ;
                                 `);

                const { rows } = result!;
                resolve(rows);
            } catch (error) {
                console.error(error)
            }

        })
    }

    create({
        userResponsible,
        firstName,
        lastName,
        description,
        date,
        type,
        office,
        category,
        occupation,
        file
    }: IKaizensDTO): Promise<Kaizens> {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await postgresql.query(`
                 INSERT INTO kaizens (user_responsible, first_name, last_name, description, date, type, office, category, occupation)
                    VALUES (       
                        '${userResponsible}',
                        '${firstName.toLowerCase()}',
                        '${lastName.toLowerCase()}',                     
                        '${description}',                      
                        '${date}',   
                         '${type.toLowerCase()}',
                         '${office}',
                         '${category}',
                         '${occupation}'
                        )
                        RETURNING id;
                        `);

                const { rows }: QueryResult = result!;

                await postgresql.query(`
                             INSERT INTO kaizen_profiles (kaizen_id, photo, path, mimetype , size, filename, folder_directory)
                                 VALUES (      
                                            ${rows[0].id},
                                           '${file!.originalname}',   
                                           '${file!.path}',       
                                           '${file!.mimetype}',   
                                           '${file!.size}',
                                           '${file!.filename}',
                                           '${file!.folderDirectory}'                              
                                         )
                                        ;
                                      `);

                return resolve(Object.assign(rows))
            } catch (error) {
                console.error(error)
            }
        })
    }

    includeTextOverview(id: number, description: string): Promise<IKaizenOverviewDTO> {
        return new Promise(async (resolve, reject) => {


            let result = await postgresql.query(`
            INSERT INTO kaizen_overview (kaizen_id, overview_about_kaizen)
               VALUES (       
                    ${id},        
                   '${description}'                  
                   )
                   RETURNING id;
                   `);

            const { rows }: QueryResult = result!;

            resolve({ overviewAboutKaizen: rows[0].overview_about_kaizen });
        })
    }

    includeAttachments(id: number, file: FileDTO): Promise<Kaizens[]> {
        return new Promise(async (resolve, reject) => {

            let result = await postgresql.query(`
            INSERT INTO kaizen_docs (kaizen_id, doc_name, doc_path, doc_mimetype , doc_size, doc_filename)
                VALUES (      
                           ${id},
                          '${file!.originalname}',   
                          '${file!.path}',       
                          '${file!.mimetype}',   
                          '${file!.size}',
                          '${file!.filename}'                                                
                        )
                       ;
                     `);

            const { rows }: QueryResult = result!;

            resolve(rows);
        })
    }

    includePhoto(id: number, file: FileDTO, imageWidth: string, imageHeight: string): Promise<Kaizens[]> {
        return new Promise(async (resolve, reject) => {

            let result = await postgresql.query(`
            INSERT INTO kaizen_photos (kaizen_id, photo_name, photo_path, photo_mimetype , photo_size, photo_filename, image_width, image_height)
                VALUES (      
                           ${id},
                          '${file!.originalname}',   
                          '${file!.path}',       
                          '${file!.mimetype}',   
                          '${file!.size}',
                          '${file!.filename}',
                          '${imageWidth}',  
                          '${imageHeight}'                                                  
                        )
                       ;
                     `);

            const { rows }: QueryResult = result!;

            resolve(rows);
        })
    }

    updateTextOverview(id: number, description: string): Promise<IKaizenOverviewDTO> {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await postgresql.query(`
                UPDATE
                    kaizen_overview
                SET
                    overview_about_kaizen = '${description}'                         
                WHERE
                    kaizen_overview.kaizen_id = ${id} 
                RETURNING *;
            `);

                const { rows }: QueryResult = result!;

                resolve({ overviewAboutKaizen: rows[0].overview_about_kaizen });
            } catch (error) {
                console.error(error)
            }
        })
    }

    delete(id: number): Promise<IKaizenDeleteDTO[]> {
        return new Promise(async (resolve, reject) => {
            try {

                let storage = await postgresql.query(`
                    DELETE FROM kaizen_profiles
                         WHERE kaizen_profiles.kaizen_id = ${id}
                             RETURNING *;
                    `);

                await postgresql.query(`
                    DELETE FROM kaizen_docs
                        WHERE kaizen_docs.kaizen_id = ${id}
                             RETURNING *;
                    `);

                await postgresql.query(`
                    DELETE FROM kaizen_overview
                        WHERE kaizen_overview.kaizen_id = ${id}
                             RETURNING *;
                    `);

                await postgresql.query(`
                    DELETE FROM kaizen_photos
                        WHERE kaizen_photos.kaizen_id = ${id}
                             RETURNING *;
                    `);

                await postgresql.query(`
                    DELETE FROM kaizens
                        WHERE kaizens.id = ${id}
                             RETURNING *;
                    `);



                resolve(storage.rows);
                reject([])
            } catch (error) {
                console.error(error)
            }
        })
    }

    deleteAttachment(docId: number): Promise<IKaizenDeleteDTO[]> {
        return new Promise(async (resolve, reject) => {
            try {
                let storage = await postgresql.query(`
                    DELETE FROM kaizen_docs
                        WHERE kaizen_docs.id = ${docId}
                            RETURNING *;
                    `);
                resolve(storage.rows);
                reject([])
            } catch (error) {
                console.error(error)
            }

        })
    }

    deletePhoto(photoId: number): Promise<IKaizenDeleteDTO[]> {
        return new Promise(async (resolve, reject) => {
            try {
                let storage = await postgresql.query(`
                    DELETE FROM kaizen_photos
                        WHERE kaizen_photos.id = ${photoId}
                            RETURNING *;
                    `);
                resolve(storage.rows);
                reject([])
            } catch (error) {
                console.error(error)
            }

        })
    }

    update({ id,
        userResponsible,
        firstName,
        lastName,
        description,
        date,
        type,
        office,
        category,
        occupation,
        file
    }: IKaizensDTO): Promise<Kaizens[]> {
        return new Promise(async (resolve, reject) => {
            try {

                await postgresql.query(`
                UPDATE 
                    kaizen_profiles 
                SET                  
                    photo='${file!.originalname}',   
                    path='${file!.path}',     
                    mimetype='${file!.mimetype}',   
                    size='${file!.size}',
                    filename='${file!.filename}',
                    folder_directory='${file!.folderDirectory}' 
                WHERE
                    kaizen_profiles.kaizen_id = ${id} 
                RETURNING *;
                         `);

                let result = await postgresql.query(`
                UPDATE
                    kaizens
                SET
                    user_responsible = ${userResponsible},
                    first_name = '${firstName}',
                    last_name = '${lastName}',
                    description = '${description}',
                    type = '${type}',
                    office = ${office},
                    category = '${category}',
                    date = '${date}',
                    occupation = '${occupation}'
                WHERE
                    kaizens.id = ${id} 
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

export { PostgressKaizensRepository }