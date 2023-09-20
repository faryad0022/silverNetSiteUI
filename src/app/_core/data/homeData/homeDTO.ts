import { BannerDTO } from "../banner/bannerDTO";
import { BlogContentDTO } from "../blogContent/blogContentDTO";
import { PropertyDTO } from "../property/propertyDTO";
import { SocialDTO } from "../social/socialDTO";

export class HomeDTO {
    constructor(
        public bannerDTOs: BannerDTO[],
        public latestBlogContent: BlogContentDTO[],
        public latestProperty: PropertyDTO[],
        public social: SocialDTO[]
    ) { }
}