import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PatientComponent } from './component/patient-form/patient-form.component';
import { SubmitComponent } from './component/submit/submit.component';

export const routes: Routes = [ 
 { path: 'home', component: HomeComponent },
  { path: 'patient-form', component: PatientComponent },
  { path: 'submit', component: SubmitComponent },
  

];

