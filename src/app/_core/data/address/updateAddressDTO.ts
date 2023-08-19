export class UpdateAddressDTO {
    constructor(
        public id: number,
        public location: string,
        public cellPhone: string,
        public telephone: string,
        public workHour: string,
        public email: string
    ) { }
}