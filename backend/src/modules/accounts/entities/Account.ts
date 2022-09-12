
class Accounts {
    id?: number;
    user_id: number = 0;
    username: string = "";
    name: string = "";
    last_name: string = "";
    email: string = "";
    created_on: Date = new Date();
    updated_on: Date = new Date();
}

export { Accounts };