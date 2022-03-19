import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardsComponent } from './admin/components/dashboards/dashboards.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "", component: DashboardsComponent },
      { path: "customers", loadChildren : () => import("./admin/components/customers/customers.module").then(module => module.CustomersModule) },
      { path: "products", loadChildren : () => import("./admin/components/products/products.module").then(module => module.ProductsModule) },
      { path: "orders", loadChildren : () => import("./admin/components/orders/orders.module").then(module => module.OrdersModule) }
    ]
  },
  { path: "", component: HomeComponent },
  { path: "baskets", loadChildren : () => import("./ui/components/baskets/baskets.module").then(module => module.BasketsModule) },
  { path: "products", loadChildren : () => import("./ui/components/products/products.module").then(module => module.ProductsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
