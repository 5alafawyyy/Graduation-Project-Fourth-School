import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../Models/api-response.model';
import { LookupResponse } from '../Models/lookup-response.model';

@Injectable({
  providedIn: 'root',
})
export class LookupService {
  private controllerPath = `${environment.basicUrl}/Lookup`;
  private GetAllCategoriesPath: string =
    this.controllerPath + '/GetAllSignCategories';
  private getDetoursLookupPath: string =
    this.controllerPath + '/GetDetoursLookup';
  private getInspectorsLookupPath: string =
    this.controllerPath + '/GetInspectorsLookup';
  private getStandardDetourLookupPath: string =
    this.controllerPath + '/GetStandardDetoursLookup';

  private getEmaraNamesLookupPath: string =
    this.controllerPath + '/GetEmaraNamesLookup';

  private getEmaraNamesLookupByUserSyncRefPath: string =
    this.controllerPath + '/GetEmaraNamesLookupByUserSyncRef';

  constructor(private _httpClient: HttpClient) {}

  getAllCategories(): Observable<ApiResponse<LookupResponse[]>> {
    return this._httpClient.get<ApiResponse<LookupResponse[]>>(
      this.GetAllCategoriesPath
    );
  }

  getAllTypeOfWork(): Observable<ApiResponse<LookupResponse[]>> {
    return this._httpClient.get<ApiResponse<LookupResponse[]>>(
      this.controllerPath + '/GetTypeOfWorkLookup'
    );
  }

  getAllStandardDetour(): Observable<ApiResponse<LookupResponse[]>> {
    return this._httpClient.get<ApiResponse<LookupResponse[]>>(
      this.getStandardDetourLookupPath
    );
  }

  getDetoursLookup(): Observable<ApiResponse<LookupResponse[]>> {
    return this._httpClient.get<ApiResponse<LookupResponse[]>>(
      this.getDetoursLookupPath
    );
  }
  getInspectorsLookup(): Observable<ApiResponse<LookupResponse[]>> {
    return this._httpClient.get<ApiResponse<LookupResponse[]>>(
      this.getInspectorsLookupPath
    );
  }

  getEmaraNamesLookup(): Observable<ApiResponse<LookupResponse[]>> {
    return this._httpClient.get<ApiResponse<LookupResponse[]>>(
      this.getEmaraNamesLookupPath
    );
  }

  getEmaraNamesLookupByUserSyncRef(
    UserSyncRef: string
  ): Observable<ApiResponse<LookupResponse[]>> {
    return this._httpClient.get<ApiResponse<LookupResponse[]>>(
      this.getEmaraNamesLookupByUserSyncRefPath + '/' + UserSyncRef
    );
  }
}
