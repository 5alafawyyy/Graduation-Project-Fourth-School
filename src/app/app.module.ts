import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { SideMenuComponent } from './Shared/Components/side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputNumberModule } from 'primeng/inputnumber';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { ImageModule } from 'primeng/image';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';
import { Loader } from '@googlemaps/js-api-loader';
import { StepsModule } from 'primeng/steps';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { BreadCrumbComponent } from './Shared/Components/bread-crumb/bread-crumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CheckboxModule } from 'primeng/checkbox';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { FilterSidebarComponent } from './Shared/Components/filter-sidebar/filter-sidebar.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { InputMaskModule } from 'primeng/inputmask';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { TabMenuModule } from 'primeng/tabmenu';
import localeFr from '@angular/common/locales/en';
import { ChartModule } from 'primeng/chart';
import { FirstUnitComponent } from './FirstUnit/first-unit/first-unit.component';
import { FirstLessonComponent } from './components/first-lesson/first-lesson.component';
import { SecondLessonComponent } from './components/second-lesson/second-lesson.component';
import { CarouselModule } from 'primeng/carousel';
registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    BreadCrumbComponent,
    FilterSidebarComponent,
    FirstUnitComponent,
    FirstLessonComponent,
    SecondLessonComponent,
  ],
  imports: [
    InputTextModule,
    ToggleButtonModule,
    NgSelectModule,
    NgxGpAutocompleteModule,
    GoogleMapsModule,
    BrowserModule,
    AppRoutingModule,
    TableModule,
    CommonModule,
    HttpClientModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    InputNumberModule,
    PaginatorModule,
    TableModule,
    ToastModule,
    ImageModule,
    FormsModule,
    ReactiveFormsModule,
    ToolbarModule,
    InputTextModule,
    DialogModule,
    ReactiveFormsModule,
    MenuModule,
    MenubarModule,
    TabViewModule,
    MenuModule,
    StepsModule,
    PanelModule,
    BreadcrumbModule,
    CheckboxModule,
    AvatarModule,
    CardModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ProgressSpinnerModule,
    MultiSelectModule,
    InputMaskModule,
    RadioButtonModule,
    FileUploadModule,
    TabMenuModule,
    ChartModule ,
    CarouselModule
    // DetourDrawMapComponent
  ],
  exports:[
    // DetourDrawMapComponent
  ],
  providers: [
    {
      provide: Loader,
      useValue: new Loader({
        apiKey: 'AIzaSyDwTcZZ17j3gXMhBh04JG4Ner6_-CImdSs',
        libraries: ['places'],
      }),
    },
    { provide: LOCALE_ID, useValue: 'en' },
    DatePipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
