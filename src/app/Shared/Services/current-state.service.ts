import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { INavigationParams } from '../Models/pagination-dto.model';

@Injectable({
  providedIn: 'root',
})
export class CurrentStateService {
  constructor(private router: Router) {}
  arrOfComponents: INavigationParams[] = [];

  setNavigationParams(model: INavigationParams) {
    var ele = this.arrOfComponents.find(
      (x: INavigationParams) => x.component === model.component
    );
    if (ele) {
      ele.pageSize = model.pageSize;
      ele.rowIndex = model.rowIndex;
    } else {
      this.arrOfComponents.push(model);
    }
  }
  getNavigationParams(ComponentName: string) {
    return this.arrOfComponents.filter((x) => x.component === ComponentName);
  }
}
