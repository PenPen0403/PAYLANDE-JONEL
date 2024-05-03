export class User{
    id?: string;
    firstName: string = "";
    middleName: string = "";
    lastName: string = "";
}

export interface iUser{
    id?: string; // Optional, as Firestore automatically generates IDs
    firstName: string;
    lastName: string;
    middleName: string;
}