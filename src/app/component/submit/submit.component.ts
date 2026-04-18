import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit',
  standalone: true,
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  patientName: string = '';
  admissionID: string = '';
  admissionDate: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.patientName = localStorage.getItem('patientName') || 'Patient';
    this.admissionDate = localStorage.getItem('admissionDate') || 'Not provided';

    // Generate random Admission ID
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    this.admissionID = `ADM-${randomDigits}`;
  }

  // This function makes the "Go to Home" button work
  goToHome() {
    this.router.navigate(['/home']);
  }
}