import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) {}

  showSpinner(spinnerNameType: SpinnerType) {
    this.spinner.show(spinnerNameType);

    setTimeout(() => this.hideSpinner(spinnerNameType), 1000);
  }

  hideSpinner(spinnerNameType: SpinnerType) {
    this.spinner.hide(spinnerNameType);
  }
}

export enum SpinnerType {
  BallClipRotate = 's1',
  LineSpinClockwiseFade = 's2',
  BallBeat = 's3',
  BallClipRotatePulse = 's4',
}
