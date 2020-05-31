import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {
  //     title: 'First post',
  //     content: 'This is first',
  //   },
  //   {
  //     title: 'Second post',
  //     content: 'This is second',
  //   },
  //   {
  //     title: 'Third post',
  //     content: 'This is third',
  //   },
  // ];
  courses: Course[] = [];
  private coursesSub: Subscription;

  constructor(public coursesService: CourseService) {}

  ngOnInit() {
    this.coursesService.getCourses();
    this.coursesSub = this.coursesService
      .getCourseUpdateLisener()
      .subscribe((courses: Course[]) => {
        this.courses = courses;
      });
  }
  ngOnDestroy() {
    this.coursesSub.unsubscribe();
  }
}
