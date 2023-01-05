import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { ResultComponent } from './result/result.component';
import { SubmitPageComponent } from './submit-page/submit-page.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'quiz', component: QuizPageComponent },
  { path: 'submit', component: SubmitPageComponent },
  { path: '', component: HomepageComponent },
  { path: 'results', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
