import { Topic } from './topic.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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

  getTopicsByCourseId(courseId: string) {
    const params = new HttpParams().set('courseId', courseId);
    this.http
      .get<Topic[]>('http://localhost:8080/topics/', { params })
      .subscribe((topicData) => {
        this.topics = this.topics.concat(topicData);
        this.topicsUpdated.next([...this.topics]);
        console.log('TopicData: ', topicData);
        console.log('topics: ', this.topics);
      });
  }

  getTopicsUpdateLisener() {
    return this.topicsUpdated.asObservable();
  }
}
