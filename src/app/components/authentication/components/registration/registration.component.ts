import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public createForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      this.checkLettersInput(),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      this.checkLettersInput(),
    ]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.required,
      this.checkPhoneNumber(),
    ]),
    username: new FormControl('', [
      Validators.required,
      this.checkLettersInput(),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  public controls = {
    firstName: this.createForm.get('firstName'),
    lastName: this.createForm.get('lastName'),
    birthday: this.createForm.get('birthday'),
    gender: this.createForm.get('gender'),
    email: this.createForm.get('email'),
    phoneNumber: this.createForm.get('phoneNumber'),
    username: this.createForm.get('username'),
    password: this.createForm.get('password'),
  };
  constructor() {}

  ngOnInit(): void {
    this.createForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  public checkLettersInput(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors =>
      /^[a-zA-Z ]*$/.test(control.value)
        ? null
        : {
            lettersInputIsInvalid: true,
          };
  }

  public checkPhoneNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors =>
      /^((\\+91-?)|0)?[0-9]{10}$/.test(control.value)
        ? null
        : {
            phoneNumberIsInvalid: true,
          };
  }
}
