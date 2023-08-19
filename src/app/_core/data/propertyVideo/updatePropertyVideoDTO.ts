export class UpdatePropertyVideoDTO {
    constructor(
        public id: number,
        public videoLink: string,
        public propertyId: number,
    ) { }
}