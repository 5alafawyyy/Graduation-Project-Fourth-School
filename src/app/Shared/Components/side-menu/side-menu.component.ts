import { Component, OnInit } from '@angular/core';
import { EnumApiResponseCode } from '../../Enums/EnumApiResponseCode';
import { Route, Router } from '@angular/router';
import { ApiResponse } from '../../Models/api-response.model';
import { INotificationDTO } from '../../Models/notification-dto';
import { PaginationDto } from '../../Models/pagination-dto.model';
import { BadgeModule } from 'primeng/badge';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass'],
})
export class SideMenuComponent implements OnInit {
  //#region Fields
  isRTA : boolean = false;
  openPopUp:boolean=false
  title = 'The Fourth Grade of science';
  user: any;
  showMenu: boolean = false;
  menuItemes = [
    {
      name: 'First Unit',
      url: '/FirstUnit',
      icon: 'pi pi-th-large',
    }
   
  ];
  //#endregion
  ngOnInit(): void {

  }
  /**
   *
   */
  constructor(

  ) {
  }
}
