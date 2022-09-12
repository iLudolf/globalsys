import { Kaizens } from "../entities/Kaizens";

//Contrato - Modelo - INterface
//DTO => Data Transfer object

interface FileDTO {
    fieldname: string,
    originalname: string,
    encoding?: string,
    mimetype: string,
    destination?: string,
    filename: string,
    path: string,
    size: number
    folderName?: string;
    folderDirectory?: string;
}

interface IKaizensDTO {
    id?: number;
    userResponsible: number;
    firstName: string;
    lastName: string;
    description: string;
    category: number;
    office: number;
    date: Date;
    type: string;
    occupation: string;
    file?: FileDTO
}

interface IKaizensInfoDTO {
    category: string;
    count: string;
}

interface IKaizenDeleteDTO {
    id: number;
    kaizen_id: number
    photo: string;
    path: string;
    mimetype: string;
    size: string;
    filename: string;
    created_on: Date;
    updated_at: Date;
    folder_directory: string;
    doc_path: string;
    photo_path: string;
}

interface IKaizensOverviewDTO {
    id: number;
    user_responsible: number;
    first_name: string,
    last_name: string;
    description: string;
    category: string;
    occupation: string;
    type: string;
    office: number;
    date: string;
    created_on: string;
    updated_on: string;
    kaizen_id: number;
    photo: string;
    path: string;
    folder_directory: string;
    mimetype: string;
    size: string;
    filename: string;
    updated_at: string;
    overview_about_kaizen: null | string;
}

interface IKaizenDocsDTO {
    doc_name: null | string;
    doc_path: null | string;
    doc_mimetype: null | string;
    doc_size: null | string;
    doc_filename: null | string;
}

interface IKaizenPhotosDTO {
    photo_name: null | string;
    photo_path: null | string;
    photo_mimetype: null | string;
    photo_size: null | string;
    photo_filename: null | string;
}

interface IKaizenOverviewDTO {
    id?: string;
    overviewAboutKaizen: string;
}


interface IKaizenRepository {
    findByID(id: number): Promise<boolean>;

    findOverviewByID(id: number): Promise<boolean>;

    list(category?: string): Promise<Kaizens[]>;

    seachKaizen(value: string, category: string): Promise<IKaizensInfoDTO[]>;

    listInfo(): Promise<IKaizensInfoDTO[]>;

    listKaizen(id: number): Promise<IKaizensOverviewDTO[]>;

    listKaizenOverview(id: number): Promise<IKaizensOverviewDTO[]>;

    listKaizenDocs(id: number): Promise<IKaizenDocsDTO[]>;

    listKaizenPhotos(id: number): Promise<IKaizenPhotosDTO[]>;

    create({
        userResponsible,
        firstName,
        lastName,
        date,
        description,
        type,
        office,
        category,
        occupation
    }: IKaizensDTO): Promise<Kaizens>;

    includeTextOverview(
        id: number,
        description: string
    ): Promise<IKaizenOverviewDTO>;

    updateTextOverview(
        id: number,
        description: string
    ): Promise<IKaizenOverviewDTO>;

    includeAttachments(
        id: number,
        file: FileDTO
    ): Promise<Kaizens[]>;

    includePhoto(
        id: number,
        file: FileDTO,
        imageWidth: string,
        imageHeight: string
    ): Promise<Kaizens[]>;

    delete(id: number): Promise<IKaizenDeleteDTO[]>;

    deleteAttachment(docId: number): Promise<IKaizenDeleteDTO[]>;

    deletePhoto(docId: number): Promise<IKaizenDeleteDTO[]>;

    update({ id,
        userResponsible,
        firstName,
        lastName,
        date,
        description,
        type,
        office,
        category,
        occupation,
        file
    }: IKaizensDTO): Promise<Kaizens[]>;
}

export {
    IKaizenRepository,
    IKaizensDTO,
    IKaizensInfoDTO,
    IKaizenDeleteDTO,
    IKaizensOverviewDTO,
    IKaizenDocsDTO,
    IKaizenPhotosDTO,
    IKaizenOverviewDTO,
    FileDTO
};