export class UpdateBlogContentDTO {
    constructor(
        public id: number,
        public title: string,
        public tags: string,
        public imageName: string,
        public text: string,
        public status: boolean,
        public isSelected: boolean,
        public viewCount: number,
        public blogGroupId: number,
    ) { }
}