export class UpdatePropertyGalleryDTO {
    constructor(
        public id: number,
        public imageName: string,
        public propertyId: number,
    ) { }
}