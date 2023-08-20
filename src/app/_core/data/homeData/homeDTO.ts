import { BannerDTO } from "../banner/bannerDTO";
import { BlogContentDTO } from "../blogContent/blogContentDTO";
import { PropertyDTO } from "../property/propertyDTO";

export class HomeDTO {
    constructor(
        public bannerDTOs: BannerDTO[],
        public latestBlogContent: BlogContentDTO[],
        public latestProperty: PropertyDTO[],
    ) { }
}