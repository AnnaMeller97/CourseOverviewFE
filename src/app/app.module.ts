import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseCreateComponent } from './course/course-create/course-create.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { AppRouteModule } from './app-route.module';
import { TopicCreateComponent } from './course/topic/topic-create/topic-create.component';
import { TopicListComponent } from './course/topic/topic-list/topic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCreateComponent,
    HeaderComponent,
    CourseListComponent,
    TopicCreateComponent,
    TopicListComponent,
  ],
  imports: [
    AppRouteModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
