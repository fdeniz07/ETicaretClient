import { async } from 'rxjs';
import { TokenResponse } from 'src/app/contracts/token/tokenResponse';
import { HttpClientService } from './../../../services/common/http-client.service';
import { AuthService } from './../../../services/common/auth.service';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { UserService } from './../../../services/common/models/user.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  constructor(private userService: UserService, spinner: NgxSpinnerService, private authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router, private socialAuthService: SocialAuthService) {
    super(spinner)
    socialAuthService.authState.subscribe(async (user: SocialUser) => {
      console.log(user)
      this.showSpinner(SpinnerType.BallBeat);
      await userService.googleLogin(user, () => {
        this.authService.identityCheck();
        this.hideSpinner(SpinnerType.BallBeat);
      })
    });
  }

  ngOnInit(): void {
  }

  async login(usernameOrEmail: string, password: string) {
    this.showSpinner(SpinnerType.BallBeat);
    await this.userService.login(usernameOrEmail, password, () => {
      this.authService.identityCheck();

      this.activatedRoute.queryParams.subscribe(params => {
        const returnUrl: string = params["returnUrl"];
        if (returnUrl)
          this.router.navigate([returnUrl]);
      });
      this.hideSpinner(SpinnerType.BallBeat);
    });
  }
}
