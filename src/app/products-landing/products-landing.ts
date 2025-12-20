import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ComingSoon } from "./coming-soon/coming-soon";
import { LiveProducts } from "./live-products/live-products";
import { SubHeader } from "./sub-header/sub-header";
import { Work } from "./work/work";
import { ProductsLandingStore } from './store/products-landing-store';

@Component({
  selector: 'bulkly-products-landing',
  imports: [Work, SubHeader, LiveProducts, ComingSoon],
  templateUrl: './products-landing.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsLanding {

  #productsLandingStore = inject(ProductsLandingStore);


  constructor() {
    this.#productsLandingStore.fetchAllLiveProducts();
  }

}
