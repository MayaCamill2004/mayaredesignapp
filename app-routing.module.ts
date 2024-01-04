import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConfirmorderPage } from './confirmorder/confirmorder.page'; 
import { CheckoutmPage } from './checkoutm/checkoutm.page';
import { AddressPage } from './address/address.page';
import { PaymentmethodPage } from './paymentmethod/paymentmethod.page';
import { SofttintPage } from './softtint/softtint.page';
import { ProductDetailsPage } from './productdetail/productdetail.page';
import { ApplepayPage } from './applepay/applepay.page'; // Adjust the path







const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },

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
 
  { path: 'softtint', component: SofttintPage },
  { path: 'checkoutm', component: CheckoutmPage },

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
    path: 'applepay',
    component: ApplepayPage,
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
    path: 'facecare',
    loadChildren: () => import('./facecare/facecare.module').then( m => m.FaceCarePageModule)
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
  {
    path: 'myorders',
    loadChildren: () => import('./myorders/myorders.module').then( m => m.MyordersPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'scalp',
    loadChildren: () => import('./scalp/scalp.module').then( m => m.ScalpPageModule)
  },
  {
    path: 'shampoos',
    loadChildren: () => import('./shampoos/shampoos.module').then( m => m.ShampoosPageModule)
  },
  {
    path: 'bodyscrub',
    loadChildren: () => import('./bodyscrub/bodyscrub.module').then( m => m.BodyscrubPageModule)
  },
  {
    path: 'showers',
    loadChildren: () => import('./showers/showers.module').then( m => m.ShowersPageModule)
  },
  {
    path: 'prevention',
    loadChildren: () => import('./prevention/prevention.module').then( m => m.PreventionPageModule)
  },
  {
    path: 'firstsignsofageing',
    loadChildren: () => import('./firstsignsofageing/firstsignsofageing.module').then( m => m.FirstsignsofageingPageModule)
  },
  {
    path: 'advancedsignsof-ageing',
    loadChildren: () => import('./advancedsignsof-ageing/advancedsignsof-ageing.module').then( m => m.AdvancedsignsofAgeingPageModule)
  },
  {
    path: 'softtint',
    loadChildren: () => import('./softtint/softtint.module').then( m => m.SofttintPageModule)
  },
  {
    path: 'productdetail/:productId',
    loadChildren: () => import('./productdetail/productdetail.page').then(m => m.ProductDetailsPage),
  },
  {
    path: 'duo',
    loadChildren: () => import('./duo/duo.module').then( m => m.DuoPageModule)
  },
  {
    path: 'instantduo',
    loadChildren: () => import('./instantduo/instantduo.module').then( m => m.InstantduoPageModule)
  },
  {
    path: 'tintedglowduo',
    loadChildren: () => import('./tintedglowduo/tintedglowduo.module').then( m => m.TintedglowduoPageModule)
  },
  {
    path: 'tintedcomplexion',
    loadChildren: () => import('./tintedcomplexion/tintedcomplexion.module').then( m => m.TintedcomplexionPageModule)
  },
  {
    path: 'two',
    loadChildren: () => import('./two/two.module').then( m => m.TwoPageModule)
  },
  {
    path: 'three',
    loadChildren: () => import('./three/three.module').then( m => m.ThreePageModule)
  },
  {
    path: 'hydratingserum',
    loadChildren: () => import('./hydratingserum/hydratingserum.module').then( m => m.HydratingserumPageModule)
  },
  {
    path: 'radianceserum',
    loadChildren: () => import('./radianceserum/radianceserum.module').then( m => m.RadianceserumPageModule)
  },
  {
    path: 'tanned',
    loadChildren: () => import('./tanned/tanned.module').then( m => m.TannedPageModule)
  },
  {
    path: 'applepay',
    loadChildren: () => import('./applepay/applepay.module').then( m => m.ApplepayPageModule)
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],

  exports: [RouterModule],
})
export class AppRoutingModule {}

