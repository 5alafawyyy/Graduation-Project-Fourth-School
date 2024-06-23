import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../Models/api-response.model';
import { INotificationDTO } from '../Models/notification-dto';
import { PaginationDto } from '../Models/pagination-dto.model';
import { interval, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  baseUrl: string = environment.basicUrl;
  private GetAllURL: string = this.baseUrl + '/Notifications/GetAllNotifications';
  private UpdateNOtificationsURL: string = this.baseUrl + '/Notifications/UpdateNotifications';


  constructor(private http: HttpClient) { }


  GetAll(userUId:string)
    : Observable<ApiResponse<PaginationDto<INotificationDTO>>> {
    // return this.http
    //   .get<ApiResponse<PaginationDto<INotificationDTO>>>(this.GetAllURL);
    return interval(30000) // Emit a value every 5 seconds
      .pipe(
        switchMap(() => this.http.get<ApiResponse<PaginationDto<INotificationDTO>>>(this.GetAllURL+'/'+userUId))
      );
  }



  updateNotifications(model: INotificationDTO[]): Observable<ApiResponse<boolean>> {
    return this.http
      .post<ApiResponse<boolean>>(this.UpdateNOtificationsURL, model)
  }

}
