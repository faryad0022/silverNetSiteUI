import { PropertyDTO } from "./propertyDTO";

export class FilterPropertyDTO{
    constructor(
        public propertyDTO: PropertyDTO[],
        public minPrice:number,
        public maxPrice:number,
        public propertyContractTypeId:number,
        public propertyTypeId:number,
        public cityId:number,
        public numberOfBedroom:number,
        public numberOfBathroom:number,
        public floorSpace:number,//متراژ
        public propertyStatus:boolean,//true = available , false = notavailable
    ){}
}