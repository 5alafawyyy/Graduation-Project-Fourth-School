import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { HtmlContentService } from '../../Services/html-content.service';
import { Location as LocationPage } from '@angular/common';
import { Breadcrumb } from 'primeng/breadcrumb';
import { NotificationService } from '../../services/notification.service';
import { ApiResponse } from '../../Models/api-response.model';
import { INotificationDTO } from '../../Models/notification-dto';
import { PaginationDto } from '../../Models/pagination-dto.model';
import { EnumApiResponseCode } from '../../Enums/EnumApiResponseCode';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.sass'],
})
export class BreadCrumbComponent implements OnInit, OnDestroy {
  //#region Feilds
  static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';
  readonly home = { icon: 'pi pi-home', routerLink: '/' };
  breadcrumbItems: MenuItem[] = [];
  htmlTemplate!: TemplateRef<any> | null;
  private destroy$ = new Subject<void>();
  //#endregion

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private htmlContentService: HtmlContentService,
    private cdr: ChangeDetectorRef,
    private _location: LocationPage,
  ) {}

  ngOnInit(): void {
    this.htmlContentService
      .getHtmlTemplate()
      .pipe(takeUntil(this.destroy$))
      .subscribe((template) => {
        this.htmlTemplate = template;
        this.cdr.detectChanges();
      });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateBreadcrumbs();
      }
    });
  }
  private updateBreadcrumbs(): void {
    this.breadcrumbItems = this.createBreadcrumbs(this.activatedRoute.root);
  }
  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: MenuItem[] = []
  ): MenuItem[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');

      if (routeURL !== '') {
        url += `/${routeURL}`;
      }
      const label =
        child.snapshot.data[BreadCrumbComponent.ROUTE_DATA_BREADCRUMB];
      if (label != null && label != undefined) {
        breadcrumbs.push({ label: label, routerLink: url });
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  navigateBefore() {
    this._location.back();
  }


}
