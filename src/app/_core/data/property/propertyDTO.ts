export class PropertyDTO {
    constructor(
        public id: number,
        public featureImage: string,
        public ownerPhoneNumber: string,
        public agentPhoneNmber: string,
        public startDate: Date,
        public endDate: Date,
        public paymentPlan: string,
        public keyHandOverDate: Date,
        public price: number,
        public vATFee: number,
        public connectionFee: number,
        public stampDutyFee: number,
        public address: string,
        public numberOfBedroom: number,
        public numberOfBathroom: number,
        public floorSpace: number,//mm
        public floor: number,
        public description: string,
        public propertyStatus: boolean,//available or no
        public propertyType: string,
        public propertyTypeId: number,
        public city: string,
        public cityId: number,
        public propertyTypeContract: string,
        public propertyContractTypeId: number,
        
    ) { }
}
