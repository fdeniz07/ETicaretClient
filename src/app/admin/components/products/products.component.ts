import { ListComponent } from './list/list.component';
import { HttpClientService } from './../../../services/common/http-client.service';
import { BaseComponent, SpinnerType } from './../../../base/base.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Create_Product } from 'src/app/contracts/create_product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private httpClientService: HttpClientService
  ) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.LineSpinClockwiseFade);
    this.httpClientService
      .get({ controller: 'products' })
      .subscribe((data) => console.log(data));

    //Contract Örnegi
    // this.httpClientService.get<Product[]>({
    //   controller: 'products'
    // }).subscribe(data => {
    //     data[0].name
    //   });

    // this.httpClientService
    //   .post(
    //     {
    //       controller: 'products',
    //     },
    //     {
    //       name: 'Kalem',
    //       stock: 100,
    //       price: 15,
    //     }
    //   )
    //   .subscribe();

    // this.httpClientService
    //   .post(
    //     {
    //       controller: 'products',
    //     },
    //     {
    //       name: 'Kagit',
    //       stock: 1,
    //       price: 5,
    //     }
    //   )
    //   .subscribe();

    // this.httpClientService
    //   .post(
    //     {
    //       controller: 'products',
    //     },
    //     {
    //       name: 'Silgi',
    //       stock: 50,
    //       price: 2.5,
    //     }
    //   )
    //   .subscribe();

    // this.httpClientService
    //   .post(
    //     {
    //       controller: 'products',
    //     },
    //     {
    //       name: 'Defter',
    //       stock: 100,
    //       price: 12,
    //     }
    //   )
    //   .subscribe();

    // this.httpClientService.put({
    //   controller:"products",},
    //   {
    //     id:"34adceda-17ae-4686-a8a1-78d390061ba3",
    //     name:"Renkli Kagit",
    //     stock:1500,
    //     price:5.5
    //   }).subscribe()

    // this.httpClientService.delete({
    //   controller:"products",},
    //     "aa581787-72f7-4bd6-a422-aefa7e00e221").subscribe();

    //Dis veri testi
    // this.httpClientService.get({fullEndPoint:"https://jsonplaceholder.typicode.com/posts"}).subscribe(data=>console.log(data));
  }

  @ViewChild(ListComponent) listComponents: ListComponent;

  createdProduct(createdProduct: Create_Product) {
    this.listComponents.getProducts();
  }
}
