import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

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
  // private topicsSubscription: Subscription;

  constructor(public topicService: TopicService) {}

  ngOnChanges() {
    console.log('panel on change: ', this.panelCloseState);

    console.log('courseId on change: ', this.courseId);
    this.topics$ = this.topicService.getTopicsByCourseId(this.courseId);
  }

  ngOnInit() {
    this.topics$ = this.topicService.getTopicsByCourseId(this.courseId);
    console.log('panel on init: ', this.panelCloseState);
    // this.topicsSubscription = this.topicService
    //   .getTopicsUpdateLisener()
    //   .subscribe((topics: Topic[]) => {
    //     const newTopics = topics.filter(
    //       (topic) => topic.courseId.toString() === this.courseId
    //     );
    //     console.log('newTopics: ', newTopics);
    //     this.topics = newTopics;
    //   });
  }
}
