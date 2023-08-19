import { RegisterRsponseResult } from "./registerResponseResult";

export class RegisterResponse {
    constructor(
        public userId: string,
        public registerResponseResult: RegisterRsponseResult
    ) { }
}