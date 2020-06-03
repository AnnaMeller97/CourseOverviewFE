import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic-create',
  templateUrl: './topic-create.component.html',
  styleUrls: ['./topic-create.component.css'],
})
export class TopicCreateComponent {
  constructor(public topicService: TopicService) {}

  onAddTopic(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.topicService.addTopic(1, form.value.name, form.value.teacher);
    form.resetForm();
  }
}
