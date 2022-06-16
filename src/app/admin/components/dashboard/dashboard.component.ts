import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from './../../../base/base.component';
import { Component, OnInit } from '@angular/core';
import {
  AlertifyService,
  MessageType,
  Position,
} from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent extends BaseComponent implements OnInit {
  constructor(private alertify: AlertifyService, spinner:NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallClipRotate);
  }

  m() {
    this.alertify.message('Merhaba', {
      messageType: MessageType.Success,
      delay: 5,
      position: Position.TopCenter,
    });
  }

  d() {
    this.alertify.dismiss();
  }
}
