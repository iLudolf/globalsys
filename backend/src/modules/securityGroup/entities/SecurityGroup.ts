
class SecurityGroup {
    id: number;
    group_id: number;
    access_create: boolean;
    access_read: boolean;
    access_update: boolean;
    access_delete: boolean;
    created_On?: Date;
    updated_At?: Date;
    userID!: number;

    constructor() {
        this.id = -1;
        this.group_id = -1;
        this.access_create = false;
        this.access_read = false;
        this.access_update = false;
        this.access_delete = false;
        this.created_On = new Date();
        this.updated_At = new Date();
    }
}

export { SecurityGroup };