export class UpdatePropertyPlanDTO {
    constructor(
        public id: number,
        public planImage: string,
        public planDescription: string,
        public propertyId: number
    ) { }
}