export class BlogContentDTO {
    constructor(
        public id: number,
        public blogGroupName: string,
        public title: string,
        public tags: string,
        public imageName: string,
        public text: string,
        public status: boolean,
        public isSelected: boolean,
        public viewCount: number,
        public blogGroupId: number,
        public createDate: Date,
        public lastUpdateDate: Date
    ) { }
}