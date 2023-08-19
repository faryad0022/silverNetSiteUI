export class UpdateCityDTO {
    constructor(
        public id: number,
        public cityName: string,
        public countryId: number,
        public countryName: string
    ) { }
}