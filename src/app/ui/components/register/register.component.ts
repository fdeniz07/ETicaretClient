import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/base/base.component';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Create_User } from '../../../contracts/users/create_user';
import { User } from '../../../entities/user';
import { UserService } from '../../../services/common/models/user.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../../services/ui/custom-toastr.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends BaseComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private userService: UserService, private toastrService: CustomToastrService, spinner: NgxSpinnerService) {
    super(spinner)
  }

  frm: FormGroup;

  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      nameSurname: ["",
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
      passwordConfirm: ['',
        [
          Validators.required
        ]
      ]
    },
      {
        validators: (group: AbstractControl): ValidationErrors | null => {
          let password = group.get("password").value;
          let passwordConfirm = group.get("passwordConfirm").value;
          // debugger;
          return password === passwordConfirm ? null : { notSame: true };
        }
      });
  }

  get component() {
    return this.frm.controls;
  }

  submitted: boolean = false;
  async onSubmit(user: User) {
    this.submitted = true;

    // var f = this.frm;
    // var c = this.component;
    // var d = this.frm.hasError("notSame");
    // debugger;

    if (this.frm.invalid)
      return;


    const result: Create_User = await this.userService.create(user);
    // debugger;
    if (result.succeeded)
      this.toastrService.message(result.message, "Kullanıcı Kaydı Başarılı", {
        messageType: ToastrMessageType.Success,
        position: ToastrPosition.TopRight
      })
    else
      this.toastrService.message(result.message, "Hata", {
        messageType: ToastrMessageType.Error,
        position: ToastrPosition.TopRight
      })

  }
}
