export class BannerDTO {
    constructor(
        public id: number,
        public bannerImage: string,
        public link: string,
        public isDelete: boolean,
        public isSelected: boolean,
        public alt:string,
        public description:string
    ) { }
}