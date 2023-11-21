import { BlogContentDTO } from "./blogContentDTO";

export class FilterBlogContentDTO {
    constructor(
        public blogContentList: BlogContentDTO[],
        public blogGroupName: string,
        public title: string,
        public isSelected: boolean,
        public isDelete: boolean,
        public viewCount: number,
        public blogGroupId: number,
    ) { }
}