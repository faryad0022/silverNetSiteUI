export class CityDTO {
    constructor(
        public id: number,
        public cityName: string,
        public countryId: number,
        public countryName: string
    ) { }
}