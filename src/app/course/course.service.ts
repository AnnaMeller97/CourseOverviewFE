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
      .get<Course[]>('http://localhost:8080/courses')
      .subscribe((courseData) => {
        this.courses = courseData;
        this.coursesUpdated.next([...this.courses]);
        console.log(courseData);
      });
  }

  getCourseUpdateLisener() {
    return this.coursesUpdated.asObservable();
  }

  addCourse(subject: string, price: number) {
    const course: Course = { id: null, subject, price };
    this.http
      .post<Course>('http://localhost:8080/course', course)
      .subscribe((responseData) => {
        this.courses.push(course);
        this.coursesUpdated.next([...this.courses]);
        window.location.href = 'http://localhost:4200';
      });
  }
}
