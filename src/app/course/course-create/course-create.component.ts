import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css'],
})
export class CourseCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  constructor(public courseService: CourseService) {}

  onAddCourse(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.courseService.addCourse(1, form.value.subject, form.value.price);
    form.resetForm();
  }
}
