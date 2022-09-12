
class Kaizens {
    id?: number;
    user_responsible: number = 0;
    first_name: string = "";
    last_name: string = "";
    type: number = 0;
    office: string = "";
    category: string = "";
    date: Date = new Date();
    occupation: string = "";
    created_on: Date = new Date();
    updated_on: Date = new Date();
    overview_about_kaizen: string = "";
    doc_name: string = "";
    doc_path: string = "";
    doc_mimetype: string = "";
    doc_size: string = "";
    doc_filename: string = "";
}

export { Kaizens };