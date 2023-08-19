export class CreateBannerDTO {
    constructor(
        public bannerImage:string,
        public link:string,
        public alt:string,
        public description:string
    ){}
}