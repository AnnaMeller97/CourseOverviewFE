import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseCreateComponent } from './course/course-create/course-create.component';

const routes: Routes = [
  { path: '', component: CourseListComponent },
  { path: 'new-course', component: CourseCreateComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouteModule {}
