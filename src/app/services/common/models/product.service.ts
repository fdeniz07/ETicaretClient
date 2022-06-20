import { Create_Product } from './../../../contracts/create_product';
import { HttpClientService } from './../http-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClientService: HttpClientService) {}

  create(product: Create_Product, successCallBack?: any) {
    this.httpClientService
      .post(
        {
          controller: 'products',
        },
        product
      )
      .subscribe((result) => {
        successCallBack();
      });
  }
}
