import { BasketModule } from './basket/basket.module';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './../../admin/components/products/products.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProductsModule, HomeModule, BasketModule],
})
export class ComponentsModule {}
