export class CreateAddressDTO {
    constructor(
        public location: string,
        public cellPhone: string,
        public telephone: string,
        public workHour: string,
        public email: string
    ) { }
}