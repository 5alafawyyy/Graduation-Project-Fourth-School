import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { LoaderService } from './Shared/Services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  //#region Fields
  title = 'Detours';
  isLogin = true;
  show = true;
  currentUrl = '';
  constructor(private router: Router, public loaderService: LoaderService) {}
  //#endregion
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isLogin = this.router.url != '/login';
      });
  }
}
