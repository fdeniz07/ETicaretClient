import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService) { 
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallClipRotate);
  }

}
