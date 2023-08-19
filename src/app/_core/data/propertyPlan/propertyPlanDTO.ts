export class PropertyPlanDTO {
    constructor(
        public id: number,
        public planImage: string,
        public planDescription: string,
        public propertyId: number
    ) { }
}