import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import data from '../../assets/questions.json';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnswersService } from '../answers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'quiz',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css'],
})
export class QuizPageComponent {
  questions!: any;
  form = new FormGroup({
    question1: new FormControl('', [Validators.required]),
    question2: new FormControl('', [Validators.required]),
    question3: new FormControl('', [Validators.required]),
    question4: new FormControl('', [Validators.required]),
  });

  constructor(private service: AnswersService, private router: Router) {}

  q1!: string;

  ngOnInit() {
    this.questions = data;
    // for (let question of this.questions) {
    //   console.log(question);
    // }
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.answers = Object.values(this.form.value);
      this.service.submitFlag = false;
      console.log(this.service.answers);

      this.router.navigateByUrl('/homepage');
    }
  }
}
