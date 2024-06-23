import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, catchError, tap, throwError } from "rxjs";
import { IRegisterAdminRequest } from "../models/i-register-admin-request";
import { IAdminResponse } from "../models/i-admin-response";
import { DescriptiveResponse } from "src/app/shared/Models/DescriptiveResponse";
import { UrlsConfiguration } from "src/app/shared/config/urls.config";
import { ILoginAdminRequest } from "../models/i-login-admin-request";
import { ILoginAdminResponse } from "../models/login_admin";
import { ILogoutAdminRequest } from "../models/i-logout-admin-request";
import { ILogoutAdminResponse } from "../models/i-logout-admin-response";
import { IUpdateAdminRequest } from "../models/i-update-admin-request";
import { adminSearchCriteria } from "../models/i-adminSearchCriteria";


@Injectable({
  providedIn: "root",
})
export class AdminService {

  baseUrl:string = environment.basicUrl;
  constructor(private http: HttpClient) {


  }
  GetAllUsers(): Observable<DescriptiveResponse<IAdminResponse[]>> {
    let url = UrlsConfiguration.Urls.User.GetAll;
    return this.http.get<DescriptiveResponse<IAdminResponse[]>>(this. baseUrl + url)
      
  }

  registerAdmin(
    requestRegister: IRegisterAdminRequest
  ): Observable<DescriptiveResponse<IAdminResponse>> {
    let url = UrlsConfiguration.Urls.Admin.RegisterAdmin;
    return this.http
      .post<DescriptiveResponse<IAdminResponse>>(
       this. baseUrl + url,
        requestRegister
      )
      
  }
  
  logInAdmin(
    loginRegister: ILoginAdminRequest
  ): Observable<DescriptiveResponse<ILoginAdminResponse>> {
    let url = UrlsConfiguration.Urls.Admin.LoginAdmin;
    return this.http
      .post<DescriptiveResponse<ILoginAdminResponse>>(
       this.baseUrl+url,
        loginRegister
      )
      
  }
  
  logOutAdmin( logInCust : ILogoutAdminRequest)
  : Observable<DescriptiveResponse<ILogoutAdminResponse>> {
    let url = UrlsConfiguration.Urls.Admin.LogoutAdmin;
    return this.http
      .post<DescriptiveResponse<ILogoutAdminResponse>>(
        this.baseUrl+url,
        logInCust
      )
      
  }

  getAdminByUid(uid : string): Observable<DescriptiveResponse<IAdminResponse>> {
    let url = UrlsConfiguration.Urls.User.GetUserByUID;
    return this.http
      .get<DescriptiveResponse<IAdminResponse>>(
        this.baseUrl+url + '/' + uid
      )
  }

  updateCustomer(
    requestRegister: IUpdateAdminRequest
  ): Observable<DescriptiveResponse<IAdminResponse>> {
    let url = UrlsConfiguration.Urls.User.UpdateAdmin;
    return this.http
      .post<DescriptiveResponse<IAdminResponse>>(
        this.baseUrl+url,
        requestRegister
      )

  }
  GetAllAdmins(searchCriteria:adminSearchCriteria): Observable<DescriptiveResponse<IAdminResponse>> {
    let url = UrlsConfiguration.Urls.User.GetAllAdmins;
    return this.http
      .post<DescriptiveResponse<IAdminResponse>>(
        this.baseUrl+url,
        searchCriteria
      )
  }
}
