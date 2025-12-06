import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home/home').then(c => c.Home) },
    { path: 'about-us', loadComponent: () => import('./about-us/about-us').then(c => c.AboutUs) },
    { path: 'info', loadComponent: () => import('./info/info').then(c => c.Info) },
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
