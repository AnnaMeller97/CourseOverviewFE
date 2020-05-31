import { Course } from './course.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private courses: Course[] = [];
  // private course: Course = { subject: '', price: null };
  private coursesUpdated = new Subject<Course[]>();

  constructor(private http: HttpClient) {}

  getCourses() {
    this.http
      .get<Course[]>('http://localhost:8080/course')
      .subscribe((courseData) => {
        this.courses = courseData;
        this.coursesUpdated.next([...this.courses]);
        console.log(courseData);
      });
  }

  getCourseUpdateLisener() {
    return this.coursesUpdated.asObservable();
  }

  addCourse(id: number, subject: string, price: number) {
    const course: Course = { id, subject, price };
    this.courses.push(course);
    this.coursesUpdated.next([...this.courses]);
  }
}
