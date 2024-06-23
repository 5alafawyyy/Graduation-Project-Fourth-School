import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../Models/api-response.model';
import { IVehicleDto } from 'src/app/User/models/ivehicle-dto';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  baseUrl:string = environment.basicUrl;

  private getAllVehiclesURL: string = this.baseUrl + '/Vehicle/GetAllVehicles';
  
  constructor(private http: HttpClient) {}

  getAllVehicles()
  :Observable<ApiResponse<IVehicleDto[]>>
  {
    return this.http
      .get<ApiResponse<IVehicleDto[]>>(
        this.getAllVehiclesURL
      );
  }
}
