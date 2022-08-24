import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from './../../../base/base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit(): void {
    // this.showSpinner(SpinnerType.BallBeat);
  }
}
