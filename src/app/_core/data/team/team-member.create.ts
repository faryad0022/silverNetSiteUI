export class TeamMemberCreateDTO {
    constructor(
            public name:string,  
            public cellPhone:string,  
            public memberPosition:string,  
            public memberPicture:string,
            public email:string,
            public instagram: string,
            public telegram: string,
            public facebook: string,
            public twitter: string,
    ){}    
}
