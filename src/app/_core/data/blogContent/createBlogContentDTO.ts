export class CreateBlogContentDTO {
    constructor(
        public title: string,
        public tags: string,
        public imageName: string,
        public text: string,
        public blogGroupId: number,
    ) { }
}