import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnswersService {
  answers!: (string | null)[];
  quizFlag: boolean;
  submitFlag: boolean;
  resultFlag: boolean;

  constructor() {
    this.quizFlag = false;
    this.submitFlag = true;
    this.resultFlag = true;
  }
}
