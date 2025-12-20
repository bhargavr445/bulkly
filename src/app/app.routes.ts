import { Routes } from '@angular/router';
import { Profile } from './profile/profile';
import { CurrentOrders } from './profile/current-orders/current-orders';
import { PastOrders } from './profile/past-orders/past-orders';
import { ProductsLandingStore } from './products-landing/store/products-landing-store';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./products-landing/products-landing').then(c => c.ProductsLanding), providers: [ProductsLandingStore] },
    { path: 'about-us', loadComponent: () => import('./about-us/about-us').then(c => c.AboutUs) },
    { path: 'info', loadComponent: () => import('./info/info').then(c => c.Info) },
    {
        path: 'profile', loadComponent: () => import('./profile/profile').then(c => c.Profile), children: [
            { path: '', redirectTo: 'current-orders', pathMatch: 'full' },
            { path: 'current-orders', component: CurrentOrders },
            { path: 'past-orders', component: PastOrders }
        ]
    },
    { path: 'contact', loadComponent: () => import('./contact/contact').then(c => c.Contact) },
    {
        path: 'product-details/:id', loadComponent: () => import('./product-details/product-details').then(c => c.ProductDetails), children: [
            { path: '', redirectTo: 'details', pathMatch: 'full' },
            { path: 'details', loadComponent: () => import('./product-details/details/details').then(c => c.Details) },
            { path: 'test-reports', loadComponent: () => import('./product-details/test-reports/test-reports').then(c => c.TestReports) },
            { path: 'vendor-info', loadComponent: () => import('./product-details/vendor-info/vendor-info').then(c => c.VendorInfo) },
            { path: 'certificates', loadComponent: () => import('./product-details/certificates/certificates').then(c => c.Certificates) },
            { path: 'qa', loadComponent: () => import('./product-details/qa/qa').then(c => c.Qa) }
        ]
    }
];
