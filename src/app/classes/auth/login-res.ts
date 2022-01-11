import { ILogRes } from "src/app/interfaces/auth/ilog-res";

export class LoginRes implements ILogRes{
    accessToken!: string;
    email!: string;
    id!: number;
    roles!: string[];
    tokenType!: string;
    username!: string;
}
