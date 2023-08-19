export class UpdateCommonQuestionDTO {
    constructor(
        public id: number,
        public question: string,
        public answer: string
    ) { }
}