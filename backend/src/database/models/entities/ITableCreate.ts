export interface ITableCreate {
    create: (pool: any) => void;
    createNewTableIfNotExists: (pool: any) => void;
}