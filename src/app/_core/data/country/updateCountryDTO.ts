export class UpdateCountryDTO {
    constructor(
        public id: number,
        public countryName: string,
        public countryFlag: string
    ) { }
}