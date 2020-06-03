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
  panelOpenState = false;
  courses: Course[] = [];
  private coursesSubscription: Subscription;
  isCreateTopic = false;

  constructor(public coursesService: CourseService) {}

  ngOnInit() {
    this.coursesService.getCourses();
    this.coursesSubscription = this.coursesService
      .getCourseUpdateLisener()
      .subscribe((courses: Course[]) => {
        this.courses = courses;
      });
  }
  ngOnDestroy() {
    this.coursesSubscription.unsubscribe();
  }

  onAddNewTopic() {
    this.isCreateTopic = true;
  }
}
