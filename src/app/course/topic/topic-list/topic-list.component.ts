import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { Topic } from '../topic.model';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
})
export class TopicListComponent implements OnInit, OnDestroy {
  @Input() courseId: string;
  @Input() panelOpenState: boolean;

  topics: Topic[] = [];
  private topicsSubscription: Subscription;

  constructor(public topicService: TopicService) {}

  ngOnInit() {
    this.topicService.getTopicsByCourseId(this.courseId);
    this.topicsSubscription = this.topicService
      .getTopicsUpdateLisener()
      .subscribe((topics: Topic[]) => {
        const newTopics = topics.filter(
          (topic) => topic.courseId.toString() === this.courseId
        );
        console.log('newTopics: ', newTopics);
        this.topics = newTopics;
      });
  }
  ngOnDestroy() {
    this.topicsSubscription.unsubscribe();
  }
}
