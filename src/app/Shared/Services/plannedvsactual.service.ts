import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { ApiResponse, PlannedVsActualDTO, PlannedVsActualRequestDto, PlannedVsActualResponseDto } from "../Models/api-response.model";
//import { PlannedVsActualRequestDto, PlannedVsActualResponseDto } from "../Models/UnplannedDetourInspectionResultSerachCriteria";

@Injectable({
  providedIn: "root",
})
export class PlannedVSActualService {


  constructor(private http: HttpClient) {}


  getResult(request: PlannedVsActualRequestDto): Observable<ApiResponse<PlannedVsActualDTO>> {
    return this.http.post<ApiResponse<PlannedVsActualDTO>>(environment.basicUrl + "/DetourInspectors/GetPlannedVsActual", request);
  }



  private errorHandeling(err: HttpErrorResponse) {
    // console.log(err.message);
    return throwError(err.message);
  }
}
