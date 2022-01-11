import { IUser } from "src/app/interfaces/user/user";

export class User implements IUser{
    id!: number;
    username!: string;
    email!: string;
    password!: string;
    nome!: string;
    cognome!: string;
    role!: string[]

    constructor(){
        this.role = ["user"]
    }
}
