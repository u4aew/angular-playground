import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-my-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class FormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    'name': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email])
  });

  constructor() { }

  ngOnInit() {
    // Initialization logic if needed
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
