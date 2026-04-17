import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit',
  standalone: true,
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  patientName: string = '';
  admissionID: string = '';
  admissionDate: string = '';     // ← Add this line

  ngOnInit() {
    this.patientName = localStorage.getItem('patientName') || 'Patient';
    this.admissionID = localStorage.getItem('admissionID') || 'Not provided';
    this.admissionDate = localStorage.getItem('admissionDate') || 'Not provided';   // ← Add this line
  }

}