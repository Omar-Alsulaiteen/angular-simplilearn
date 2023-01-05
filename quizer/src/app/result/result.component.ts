import { Component } from '@angular/core';
import { AnswersService } from '../answers.service';
import data from '../../assets/questions.json';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent {
  questions: any;
  constructor(public service: AnswersService) {}

  ngOnInit() {
    this.questions = data;
  }

  getFinalGrade() {
    let r = 0;
    let index = 0;
    for (let question of data) {
      if (question.answer == this.service.answers[index++]) {
        ++r;
      }
    }
    return r;
  }
}
