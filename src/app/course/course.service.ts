import { Course } from './course.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CourseService {
  // private coursesUpdated = new Subject<Course[]>();

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:8080/courses');
    // .pipe(shareReplay());
  }

  addCourse(subject: string, price: number): Observable<any> {
    const course: Course = { id: null, subject, price };
    return this.http.post<Course>('http://localhost:8080/course', course);
  }
}
