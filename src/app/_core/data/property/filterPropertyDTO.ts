import { PropertyDTO } from "./propertyDTO";

export class FilterPropertyDTO {
    constructor(
        public pageId: number,
        public pageCount: number,
        public activePage: number,
        public startPage: number,
        public endPage: number,
        public takeEntity: number,
        public skipEntity: number,
        public totalRecords: number,
        public propertyDTOs: PropertyDTO[],
        public minPrice: number,
        public maxPrice: number,
        public propertyContractTypeId: number,
        public propertyTypeId: number,
        public cityId: number,
        public numberOfBedroom: number,
        public numberOfBathroom: number,
        public floorSpace: number,//متراژ
        public propertyStatus: boolean,//true = available , false = notavailable
        public count: number
    ) { }
}