import { Component, Inject } from '@angular/core';
import { AnswersService } from '../answers.service';
import data from '../../assets/questions.json';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.css'],
})
export class SubmitPageComponent {
  answers!: any;
  questions!: any;

  form = new FormGroup({
    question1: new FormControl('', [Validators.required]),
    question2: new FormControl('', [Validators.required]),
    question3: new FormControl('', [Validators.required]),
    question4: new FormControl('', [Validators.required]),
  });

  constructor(private service: AnswersService, private router: Router) {}

  ngOnInit() {
    this.questions = data;
    this.answers = this.service.answers;
  }
  getAnswers() {
    return this.service.answers;
  }
  onSubmit() {
    this.service.submitFlag = true;
    this.service.quizFlag = true;
    this.service.resultFlag = false;

    this.router.navigateByUrl('/homepage');
  }
}
