import { timestamp } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
interface IUser {
    id: string;
    login: string;
    password: string;
    version: number;
    createdAt: number;
    updatedAt: number;
}
export class User implements IUser {
    id: string;
    login: string;
    password: string;
    version: number;
    createdAt: number;
    updatedAt: number;
    constructor(login: string, password: string){
        this.id = uuidv4();
        this.login = login;
        this.password = password;
        this.version = 1;
        this.createdAt = Date.now();
        this.updatedAt = this.createdAt;
    }
}
export const users: User[] = [];