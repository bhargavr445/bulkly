import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { ProductI } from '../../interfaces/productI';
import { ProductsLandingStore } from '../store/products-landing-store';
import { Product } from "./product/product";
import { ProductCardLoader } from '../../commons/components/skeletons/product-card-loader/product-card-loader';

@Component({
  selector: 'bulkly-live-products',
  imports: [Product, ProductCardLoader],
  templateUrl: './live-products.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveProducts {

  #productsLandingStore = inject(ProductsLandingStore);

  productsList: Signal<ProductI[]> = this.#productsLandingStore.liveProductsListC;
  productsListError: Signal<any> = this.#productsLandingStore.productsListErrorC;
  productsListApiLoading: Signal<any> = this.#productsLandingStore.productsListApiLoading;

}
