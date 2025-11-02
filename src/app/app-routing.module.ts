import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { BuyComponent } from './buy/buy.component';
import { SearchComponent } from './search/search.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { WeddingBazarComponent } from './wedding-bazar/wedding-bazar.component';

import { AuthGuard } from './auth.guard';
import { OrdersComponent } from './orders/orders.component';
import { AddressComponent } from './address/address.component';
import { CouponsComponent } from './coupons/coupons.component';
import { GrocriesComponent } from './grocries/grocries.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionsComponent } from './fashions/fashions.component';
import { CartComponent } from './cart/cart.component';
import { DealsComponent } from './deals/deals.component';
import { BeautyComponent } from './beauty/beauty.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'buy', component: BuyComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'feedback', component: FeedbackComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'weddingBazar', component: WeddingBazarComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'address', component: AddressComponent, canActivate: [AuthGuard]  },
  { path: 'coupons', component: CouponsComponent,canActivate: [AuthGuard]  },
   { path: 'grocries', component: GrocriesComponent,canActivate: [AuthGuard]  },
    { path: 'electronics', component: ElectronicsComponent,canActivate: [AuthGuard]  },
     { path: 'fashion', component: FashionsComponent,canActivate: [AuthGuard]  },
     { path: 'beauty', component: BeautyComponent,canActivate: [AuthGuard]  },
      { path: 'product-detail', component: ProductDetailComponent,canActivate: [AuthGuard]  },
      { path: 'deals', component: DealsComponent },
      { path: 'product-detail/:id', component: ProductDetailComponent }, // view details
      { path: 'buy/:id', component: BuyComponent,canActivate: [AuthGuard]  },  
      { path: 'cart', component: CartComponent },
  

  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}