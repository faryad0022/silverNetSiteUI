import { AuthResponseResult } from "./authResponseResult";

export class CurrentUser {
    constructor(
        public id: string,
        public email: string,
        public userName: string,
        public firstName: string,
        public lastName: string,
        public imageName: string,
        public phoneNumber: string,
        public token: string,
        public emailConfirmed: boolean,
        public authResponseResult: AuthResponseResult

    ) { }
}