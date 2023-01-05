import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  constructor(private service: AnswersService, private router: Router) {}

  getAnswers() {
    return this.service.answers;
  }
  route(url: string) {
    this.router.navigateByUrl(url);
  }

  getQuizFlag() {
    return this.service.quizFlag;
  }
  getSubmitFlag() {
    return this.service.submitFlag;
  }
  getResultFlag() {
    return this.service.resultFlag;
  }
}
