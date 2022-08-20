import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  frm: FormGroup;

  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      firstNameLastName: ["",
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3)
        ]
      ],
      userName: ["",
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3)
        ]
      ],
      email: ["",
        [
          Validators.required,
          Validators.maxLength(250),
          Validators.email
        ]
      ],
      password: ['',
        [
          Validators.required,
        ]
      ],
      passwordControl: ['',
        [
          Validators.required
        ]
      ]
    },
      {
        validators: (group: AbstractControl): ValidationErrors | null => {
          let password = group.get("password").value;
          let passwordControl = group.get("passwordControl").value;
          // debugger;
          return password === passwordControl ? null : { notSame: true };
        }
      });
  }

  get component() {
    return this.frm.controls;
  }

  submitted: boolean = false;
  onSubmit(data: User) {
    this.submitted = true;

    // var f = this.frm;
    // var c = this.component;
    // var d = this.frm.hasError("notSame");
    // debugger;

    if (this.frm.invalid) return;
  }
}
