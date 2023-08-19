export class CreatePropertyPlanDTO {
    constructor(
        public planImage: string,
        public planDescription: string,
        public propertyId: number
    ) { }
}