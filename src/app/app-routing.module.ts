import { HomeComponent } from './ui/components/home/home.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin', //Eger sayfa yapimiz birden fazla layout kullaniyorsa, path kismina layout adi girilir, sonrasinda gelen sayfalarin children oldugu belirtilerek nesne türünde cagrilir.
    component: LayoutComponent,
    children: [
      {
        path: 'customers',
        loadChildren: () =>
          import('./admin/components/customer/customer.module').then(
            (module) => module.CustomerModule
          ),
      },
      {
        path: '',
        component: DashboardComponent, //Ilgili layouta bagli ana sayfa niteligindeki alanlarin path kismi bos, component adi gelir
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./admin/components/products/products.module').then(
            (module) => module.ProductsModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./admin/components/order/order.module').then(
            (module) => module.OrderModule
          ),
      },
    ],
  },
  {
    path: '', //Ana layoutumuzun adini bos birakiyoruz
    component: HomeComponent, //Ana layout tetiklendiginde ilk acilacak component adi girilir
  },
  {
    path: 'basket',
    loadChildren: () =>
      import('./ui/components/basket/basket.module').then(
        (module) => module.BasketModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./ui/components/products/products.module').then(
        (module) => module.ProductsModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./ui/components/register/register.module').then(
        (module) => module.RegisterModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./ui/components/login/login.module').then(
        (module) => module.LoginModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
