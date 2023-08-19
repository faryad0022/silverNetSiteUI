import { BannerDTO } from "./bannerDTO";

export class FilterBannerDTO {
    constructor(
        public bannerDTO: BannerDTO[],
        public isDelete:boolean,
        public isSelected:boolean,
    ) { }
}