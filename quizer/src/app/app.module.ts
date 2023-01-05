import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { SubmitPageComponent } from './submit-page/submit-page.component';
import { QuestionComponent } from './question/question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    QuizPageComponent,
    SubmitPageComponent,
    QuestionComponent,
    ResultComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
