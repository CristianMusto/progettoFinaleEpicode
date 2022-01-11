import { IuserLog } from "src/app/interfaces/login/iuser-log";

export class UserLog implements IuserLog{
    username!: string;
    password!: string;
    constructor(username: string, password: string){
        username = username;
        password = password;
    }
}
