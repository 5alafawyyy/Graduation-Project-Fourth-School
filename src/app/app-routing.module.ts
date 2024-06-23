import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstUnitComponent } from './FirstUnit/first-unit/first-unit.component';
import { FirstLessonComponent } from './components/first-lesson/first-lesson.component';
import { AppComponent } from './app.component';

import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  template: `
    <div class="image-container">
      <img src="../assets/images/power.jpg" style="width: 100%; height: auto;">
    </div>
  `,
})
export class ImageComponent { }

const routes: Routes = [
  // {
  //   path: 'AddNewDetour',
  //   component: DetourHomeComponent,
  //   children: [
  //     { path: 'step1', component: DetourHomeComponent },
  //     { path: 'step2', component: DetourDrawHomeComponent },
  //     { path: '', redirectTo: 'step1', pathMatch: 'full' }
  //   ]
  // },
  // Redirect the root path ('/') to a component that displays the image
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ImageComponent }, 
  
   {
    path: 'FirstUnit',
    component: FirstUnitComponent,
  data: {
      breadcrumb: 'الوحده الاولى',
    },
  },
  {
    path: 'FirstLesson',
    component: FirstLessonComponent,
    data: {
      breadcrumb: 'الدرس الاول ',
    },
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


