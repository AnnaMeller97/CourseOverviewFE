import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  panelCloseState: true;

  courses$: Observable<Course[]>;
  isCreateTopic = false;

  constructor(public coursesService: CourseService) {}

  ngOnInit() {
    this.courses$ = this.coursesService.getCourses();
  }

  onAddNewTopic() {
    this.isCreateTopic = true;
  }
}
