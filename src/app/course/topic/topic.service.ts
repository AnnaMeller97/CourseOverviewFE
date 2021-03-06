import { Topic } from './topic.model';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TopicService {
  private topics: Topic[] = [];

  private topicsUpdated = new Subject<Topic[]>();

  constructor(private http: HttpClient) {}

  addTopic(courseId: number, name: string, teacher: string) {
    const topic: Topic = { courseId, name, teacher };
    this.http
      .post<Topic>('http://localhost:8080/topic', topic)
      .subscribe((responseData) => {
        this.topics.push(topic);
        this.topicsUpdated.next([...this.topics]);
      });
  }

  getTopicsByCourseId(courseId: string): Observable<Topic[]> {
    const params = new HttpParams().set('courseId', courseId);
    return this.http.get<Topic[]>('http://localhost:8080/topics/', { params });
  }

  getTopicsUpdateLisener() {
    return this.topicsUpdated.asObservable();
  }
}
