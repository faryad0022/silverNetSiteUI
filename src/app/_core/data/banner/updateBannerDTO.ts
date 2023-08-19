export class UpdateBannerDTO {
    constructor(
        public id: number,
        public bannerImage:string,
        public link:string,
        public alt:string,
        public description:string
    ){}
}