import { EnumApiResponseCode } from '../Enums/EnumApiResponseCode';

export interface ApiResponse<T> {
  isErrorState: boolean;
  message: string;
  errorDescription: string;
  value: T;
  responseCode?: EnumApiResponseCode | null;
}


export class UnplannedDetourInspectionResultSerachCriteria {
  detourInspectorHeaderSyncRef: String = "";
  pageIndex: number = 0;
  pageSize: number = 100;
}
export interface PlannedVsActualResponseDto {
  plannedSign: string;
  actualSign: string;
  actualRoadImage: string;
  actualSignLocation : string;
  signCategoryId: number;
  isValid: boolean;
  signName : string;
  actualSignSyncRef : string;
  plannedSignSyncRef : string;
}

export  class PlannedVsActualRequestDto {
  detourSyncRef!: string;
  unPlannedDetourSyncRef!: string;
  detourPlannedSyncRef!: string|null;
}

export interface PlannedVsActualDTO{
  address : string;
  plannedVsActualResponse : PlannedVsActualResponseDto[];
}

export interface IPlannedVsActualDTO{
    address :string
    plannedVsActualResponse : PlannedVsActualResponseDto[]
    unMatchedActualSigns : PlannedVsActualResponseDto[]
    plannedNoofCones :number
    plannedNoOfBarrier :number
    plannedNoOfSign :number
    actualNoofCones :number
    actualNoOfBarrier :number
    actualNoOfSign :number
    detourDistance :number
    createdDate :Date|null
    detourSignCount :number
    avgDetourDistance:number
}

export interface IPlannedVsActualRequestDto{
   detourSyncRef :string    
   unPlannedDetourSyncRef :string
}