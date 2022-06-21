import {
  AlertifyService,
  MessageType,
  Position,
} from './../../../../services/admin/alertify.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from './../../../../contracts/create_product';
import { ProductService } from './../../../../services/common/models/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private productService: ProductService,
    private alertify: AlertifyService
  ) {
    super(spinner);
  }

  ngOnInit(): void {}

  create(
    name: HTMLInputElement,
    stock: HTMLInputElement,
    price: HTMLInputElement
  ) {
    this.showSpinner(SpinnerType.BallClipRotatePulse);
    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);

    if (!name.value) {
      this.alertify.message('Lütfen ürün adnini giriniz!', {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopRight,
      });
      return;
    }

    if (parseInt(stock.value) < 0) {
      this.alertify.message('Lütfen stok bilgisini dogru giriniz!', {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopRight,
      });
      return;
    }

    this.productService.create(
      create_product,
      () => {
        this.hideSpinner(SpinnerType.BallClipRotatePulse);
        this.alertify.message('Ürün basariyla eklenmistir.', {
          dismissOthers: true,
          messageType: MessageType.Success,
          position: Position.TopRight,
        });
      },
      (errorMessage) => {
        this.alertify.message(errorMessage, {
          dismissOthers: true,
          messageType: MessageType.Error,
          position: Position.TopRight,
        });
      }
    );
  }
}
