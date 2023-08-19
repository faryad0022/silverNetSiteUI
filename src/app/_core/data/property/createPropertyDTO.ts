import { DateAdapter } from "@angular/material/core";

export interface CreatePropertyDTO {
         featureImage: string,
         ownerPhoneNumber: string,
         agentPhoneNmber: string,
         startDate: Date,
         endDate: Date,
         paymentPlan: string,
         keyHandOverDate: Date,
         price: number,
         vATFee: number,
         connectionFee: number,
         stampDutyFee: number,
         address: string,
         numberOfBedroom: number,
         numberOfBathroom: number,
         floorSpace: number,//mm
         floor: number,
         description: string,
         propertyStatus: boolean,//available or no
         propertyType: string,
         propertyTypeId: number,
         city: string,
         cityId: number,
         propertyTypeContract: string,
         propertyContractTypeId: number,
}
export const inits: CreatePropertyDTO={
     featureImage: '',
     ownerPhoneNumber: '',
     agentPhoneNmber: '',
     startDate: null,
     endDate: null,
     paymentPlan: '',
     keyHandOverDate: null,
     price: 0,
     vATFee: 0,
     connectionFee: 0,
     stampDutyFee: 0,
     address: '',
     numberOfBedroom: 0,
     numberOfBathroom: 0,
     floorSpace: 0,//mm
     floor: 0,
     description: '',
     propertyStatus: true,//available or no
     propertyType: '',
     propertyTypeId: 0,
     city: '',
     cityId: 0,
     propertyTypeContract: '',
     propertyContractTypeId: 0,
}