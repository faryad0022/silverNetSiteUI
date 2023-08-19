export class UpdateRealEstateServiceDTO {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public imageName: string
    ) { }
}