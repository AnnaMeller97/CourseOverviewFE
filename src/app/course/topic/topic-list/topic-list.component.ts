import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';

import { Topic } from '../topic.model';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
})
export class TopicListComponent implements OnInit, OnChanges {
  @Input() courseId: string;
  @Input() panelCloseState: boolean;

  topics$: Observable<Topic[]>;

  constructor(public topicService: TopicService) {}

  ngOnChanges() {
    this.topics$ = this.topicService.getTopicsByCourseId(this.courseId);
  }

  ngOnInit() {
    this.topics$ = this.topicService.getTopicsByCourseId(this.courseId);
  }
}
