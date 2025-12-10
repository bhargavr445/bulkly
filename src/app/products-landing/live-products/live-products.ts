import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { ProductI } from '../../interfaces/productI';
import { ProductsLandingStore } from '../store/products-landing-store';
import { Product } from "./product/product";

@Component({
  selector: 'bulkly-live-products',
  imports: [Product],
  templateUrl: './live-products.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveProducts {

  #productsLandingStore = inject(ProductsLandingStore);

  productsList: Signal<ProductI[]> = this.#productsLandingStore.productsListC;
  productsListError: Signal<any> = this.#productsLandingStore.productsListErrorC;

  constructor() {
    this.#productsLandingStore.fetchAllLiveProducts();
  }

}
