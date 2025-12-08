import { ApplicationConfig, inject, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideSignalFormsConfig, SignalFormsConfig } from '@angular/forms/signals';
import { IsActiveMatchOptions, provideRouter, Router, UrlTree, ViewTransitionInfo, withComponentInputBinding, withInMemoryScrolling, withRouterConfig, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';

const NG_STATUS_CLASSES: SignalFormsConfig['classes'] = {
  'ng-touched': (state) => state.touched(),
  'ng-untouched': (state) => !state.touched(),
  'ng-dirty': (state) => state.dirty(),
  'ng-pristine': (state) => !state.dirty(),
  'ng-valid': (state) => state.valid(),
  'ng-invalid': (state) => state.invalid(),
  'ng-pending': (state) => state.pending(),
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    /* Providing all the css classes that needs to be generated based on form status */
    provideSignalFormsConfig({ classes: NG_STATUS_CLASSES }),
    /* Routing config */
    provideRouter(
      routes,
      /* to read route values using input */
      withComponentInputBinding(),
      /* this will enable to read route values even in child routing. */
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
      /* when route changes, this config help us to scroll to the top in the next route */
      withInMemoryScrolling({ scrollPositionRestoration: "top", anchorScrolling: 'enabled' }),
      /* help for smooth animation when route changes */
      withViewTransitions({ onViewTransitionCreated })
    )
  ]
};

/* This method is to skip the animations for fragment and queryparams changes */
function onViewTransitionCreated(transitionInfo: ViewTransitionInfo) {
  const router = inject(Router);
  const targetUrl: UrlTree = router.getCurrentNavigation()!.finalUrl!;
  // Skip transition if only fragment or query params change
  const config: IsActiveMatchOptions = {
    paths: 'exact',
    matrixParams: 'exact',
    fragment: 'ignored',
    queryParams: 'ignored',
  };
  if (router.isActive(targetUrl, config)) {
    transitionInfo.transition.skipTransition();
  }
}