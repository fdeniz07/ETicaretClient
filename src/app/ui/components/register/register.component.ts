import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  frm: FormGroup;

  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      firstNameLastName: [
        "",
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3),
        ],
      ],
      userName: [
        "",
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3),
        ],
      ],
      email: [
        "",
        [Validators.required, Validators.maxLength(50), Validators.email],
      ],
      password: [''],
      passwordControl: [''],
    });
  }

  get component() {
    return this.frm.controls;
  }

  submitted: boolean = false;
  onSubmit(data: any) {
    this.submitted = true;

    var c = this.component;
    debugger;

    if (this.frm.invalid) return;


  }
}
