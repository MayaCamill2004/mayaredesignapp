import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConfirmorderPage } from './confirmorder/confirmorder.page'; // Import ConfirmOrderPage
import { CheckoutmPage } from './checkoutm/checkoutm.page';
import { AddressPage } from './address/address.page';
import { PaymentmethodPage } from './paymentmethod/paymentmethod.page';




const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'my-page',
    loadChildren: () => import('./my-page/my-page.module').then(m => m.MyPagePageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule),
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule),
  },
  {
    path: 'first',
    loadChildren: () => import('./first/first.module').then(m => m.FirstPageModule),
  },
  {
    path: 'secondhome',
    loadChildren: () => import('./secondhome/secondhome.module').then(m => m.SecondhomePageModule),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./favourites/favourites.module').then( m => m.FavouritesPageModule)
  },
  {
    path: 'tintedcare',
    loadChildren: () => import('./tintedcare/tintedcare.module').then( m => m.TintedcarePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
 

  {
    path: 'add-address',
    component: AddressPage,
  },
  { path: 'paymentmethod', component: PaymentmethodPage },
{
    path: '',
    redirectTo: '/tabs/home', 
    pathMatch: 'full',
  },
 
  {
    path: 'checkoutm',
    component: CheckoutmPage,
    data: {
      cartItems: [], 
    },
  },
  {
    path: 'checkoutm',
    component: CheckoutmPage,
    data: {
      cartItems: [],
    },
  },
  {
    path: 'confirmorder',
    component: ConfirmorderPage,
  },
  {
    path: 'face-care',
    loadChildren: () => import('./face-care/face-care.module').then( m => m.FaceCarePageModule)
  },
  {
    path: 'faceserum',
    loadChildren: () => import('./faceserum/faceserum.module').then( m => m.FaceserumPageModule)
  },
  {
    path: 'moisturizers',
    loadChildren: () => import('./moisturizers/moisturizers.module').then( m => m.MoisturizersPageModule)
  },
  {
    path: 'nightcare',
    loadChildren: () => import('./nightcare/nightcare.module').then( m => m.NightcarePageModule)
  },
  {
    path: 'tintedcareee',
    loadChildren: () => import('./tintedcareee/tintedcareee.module').then( m => m.TintedcareeePageModule)
  },
  {
    path: 'checkoutm',
    loadChildren: () => import('./checkoutm/checkoutm.module').then( m => m.CheckoutmPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'paymentmethod',
    loadChildren: () => import('./paymentmethod/paymentmethod.module').then( m => m.PaymentmethodPageModule)
  },
  {
    path: 'confirmorder',
    loadChildren: () => import('./confirmorder/confirmorder.module').then( m => m.ConfirmorderPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'trending',
    loadChildren: () => import('./trending/trending.module').then( m => m.TrendingPageModule)
  },
  {
    path: 'testing',
    loadChildren: () => import('./testing/testing.module').then( m => m.TestingPageModule)
  },
  {
    path: 'bodycare',
    loadChildren: () => import('./bodycare/bodycare.module').then( m => m.BodycarePageModule)
  },
  {
    path: 'skinageing',
    loadChildren: () => import('./skinageing/skinageing.module').then( m => m.SkinageingPageModule)
  },
  {
    path: 'by',
    loadChildren: () => import('./by/by.module').then( m => m.ByPageModule)
  },
  {
    path: 'newin',
    loadChildren: () => import('./newin/newin.module').then( m => m.NewinPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
