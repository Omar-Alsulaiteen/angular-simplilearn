import { Component, Input } from '@angular/core';
import { FormGroupDirective, ControlContainer } from '@angular/forms';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class QuestionComponent {
  @Input('qn') qn!: number;
  @Input('question') question: any;
  @Input('answer') answer!: any;
}
