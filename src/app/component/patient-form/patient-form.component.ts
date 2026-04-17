import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientComponent {

  patientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.patientForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      bloodPressure: [''],
      temperature: [''],
      heartRate: [''],
      reasonForAdmission: ['', Validators.required],
      admissionDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.patientForm.valid) {
      const formData = this.patientForm.value;

      console.log('Form Data Sent to Backend:', formData);

      // Save the name and admission date
      localStorage.setItem('patientName', formData.fullName);
      localStorage.setItem('admissionDate', formData.admissionDate);

      // Generate and save Admission ID
      const randomDigits = Math.floor(1000 + Math.random() * 9000);
      const admissionID = `ADM-${randomDigits}`;
      localStorage.setItem('admissionID', admissionID);

      // Navigate to success page
      this.router.navigate(['/submit']);
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}