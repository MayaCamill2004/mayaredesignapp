import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'facecare',
    loadChildren: () => import('./facecare/facecare.module').then(m => m.FacecarePageModule)
  },
  { 
    path: 'product-detail/:title', 
    loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tients',
    loadChildren: () => import('./tients/tients.module').then( m => m.TientsPageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./favourites/favourites.module').then( m => m.FavouritesPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'checkoutm',
    loadChildren: () => import('./checkoutm/checkoutm.module').then( m => m.CheckoutmPageModule)
  },
  {
    path: 'confirmorder',
    loadChildren: () => import('./confirmorder/confirmorder.module').then( m => m.ConfirmorderPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'bodycare',
    loadChildren: () => import('./bodycare/bodycare.module').then( m => m.BodycarePageModule)
  },
  {
    path: 'facecare',
    loadChildren: () => import('./facecare/facecare.module').then( m => m.FacecarePageModule)
  },
  {
    path: 'applepay',
    loadChildren: () => import('./applepay/applepay.module').then( m => m.ApplepayPageModule)
  },
  {
    path: 'bodyscrub',
    loadChildren: () => import('./bodyscrub/bodyscrub.module').then( m => m.BodyscrubPageModule)
  },
  {
    path: 'duo',
    loadChildren: () => import('./duo/duo.module').then( m => m.DuoPageModule)
  },
  {
    path: 'newin',
    loadChildren: () => import('./newin/newin.module').then( m => m.NewinPageModule)
  },
  {
    path: 'nightcare',
    loadChildren: () => import('./nightcare/nightcare.module').then( m => m.NightcarePageModule)
  },
  {
    path: 'moisturizers',
    loadChildren: () => import('./moisturizers/moisturizers.module').then( m => m.MoisturizersPageModule)
  },
  {
    path: 'instantduo',
    loadChildren: () => import('./instantduo/instantduo.module').then( m => m.InstantduoPageModule)
  },
  {
    path: 'hydratingserum',
    loadChildren: () => import('./hydratingserum/hydratingserum.module').then( m => m.HydratingserumPageModule)
  },
  {
    path: 'firstsignsofageing',
    loadChildren: () => import('./firstsignsofageing/firstsignsofageing.module').then( m => m.FirstsignsofageingPageModule)
  },
  {
    path: 'faceserum',
    loadChildren: () => import('./faceserum/faceserum.module').then( m => m.FaceserumPageModule)
  },
  {
    path: 'two',
    loadChildren: () => import('./two/two.module').then( m => m.TwoPageModule)
  },
  {
    path: 'trending',
    loadChildren: () => import('./trending/trending.module').then( m => m.TrendingPageModule)
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
    path: 'tintedcareee',
    loadChildren: () => import('./tintedcareee/tintedcareee.module').then( m => m.TintedcareeePageModule)
  },
  {
    path: 'three',
    loadChildren: () => import('./three/three.module').then( m => m.ThreePageModule)
  },
  {
    path: 'tanned',
    loadChildren: () => import('./tanned/tanned.module').then( m => m.TannedPageModule)
  },
  {
    path: 'softtint',
    loadChildren: () => import('./softtint/softtint.module').then( m => m.SofttintPageModule)
  },
  {
    path: 'skinageing',
    loadChildren: () => import('./skinageing/skinageing.module').then( m => m.SkinageingPageModule)
  },
  {
    path: 'showers',
    loadChildren: () => import('./showers/showers.module').then( m => m.ShowersPageModule)
  },
  {
    path: 'shampoos',
    loadChildren: () => import('./shampoos/shampoos.module').then( m => m.ShampoosPageModule)
  },
  {
    path: 'scalp',
    loadChildren: () => import('./scalp/scalp.module').then( m => m.ScalpPageModule)
  },
  {
    path: 'radianceserum',
    loadChildren: () => import('./radianceserum/radianceserum.module').then( m => m.RadianceserumPageModule)
  },
  {
    path: 'prevention',
    loadChildren: () => import('./prevention/prevention.module').then( m => m.PreventionPageModule)
  },
  {
    path: 'paymentmethod',
    loadChildren: () => import('./paymentmethod/paymentmethod.module').then( m => m.PaymentmethodPageModule)
  },
  {
    path: 'address-book',
    loadChildren: () => import('./address-book/address-book.module').then( m => m.AddressBookPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'byconcern',
    loadChildren: () => import('./byconcern/byconcern.module').then( m => m.ByconcernPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'diagnostic-step-one',
    loadChildren: () => import('./diagnostic-step-one/diagnostic-step-one.module').then( m => m.DiagnosticStepOnePageModule)
  },
  {
    path: 'diagnostic-step-two',
    loadChildren: () => import('./diagnostic-step-two/diagnostic-step-two.module').then( m => m.DiagnosticStepTwoPageModule)
  },
  {
    path: 'diagnostic-step-three',
    loadChildren: () => import('./diagnostic-step-three/diagnostic-step-three.module').then( m => m.DiagnosticStepThreePageModule)
  },
  {
    path: 'diagnostic-results',
    loadChildren: () => import('./diagnostic-results/diagnostic-results.module').then( m => m.DiagnosticResultsPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
