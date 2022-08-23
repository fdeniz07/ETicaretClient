import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { BasketModule } from './basket/basket.module';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './../../admin/components/products/products.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    HomeModule,
    BasketModule,
    RegisterModule,
    LoginModule
  ],
})
export class ComponentsModule {}
