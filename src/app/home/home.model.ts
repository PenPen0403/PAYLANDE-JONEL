export class User{
    id: string;
    manhwaName: string;
    author:string;
    releaseDate: Date;
    chapter: number;
    status: string[] = [];
    adultContent: boolean = false;
    
    constructor(
    id: string = '', 
    manhwaName: string = '', 
    author: string = '', 
    releaseDate: Date = new Date(),
    chapter: number = 0, 
    status: string[] = [],
    adultContent: boolean = false){

    this.id = id;
    this.manhwaName = manhwaName;
    this.author = author;
    this.releaseDate = releaseDate;
    this.chapter = chapter;
    this.status = status;
    this.adultContent = adultContent;

    }
}

export interface iUser {
    id: string;
    manhwaName: string;
    author:string;
    releaseDate: Date;
    chapter: number;
    status: string[];
    adultContent: boolean;
}