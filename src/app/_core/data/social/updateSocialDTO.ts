export class UpdateSocialDTO {
    constructor(
        public id: number,
        public name: string,
        public link: string,
        public icon: string
    ) { }
}