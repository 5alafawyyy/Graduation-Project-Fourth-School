import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor(private router: Router) {}
  isLoading: boolean = false;
  parts: string[] = [];
  // showLoader() {
  //   //const segments = this.router.url.split('/');
  //   //if (segments[1] != 'AddNewDetour')
  //   this.isLoading = true;
  // }
  showLoaders(part: any) {
    //const segments = this.router.url.split('/');
    //if (segments[1] != 'AddNewDetour')
    this.parts.push(part);
    this.isLoading = true;
  }
  // hideLoader() {
  //   this.isLoading = false;
  // }

  hideLoaders(part: any) {
    const index = this.parts.indexOf(part, 0);
    if (index > -1) {
      this.parts.splice(index, 1);
    }
    if (!(this.parts.length > 0)) {
      this.isLoading = false;
    }
  }
}
