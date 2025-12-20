import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { Product } from './product/product';
import { ProductsLandingStore } from '../store/products-landing-store';
import { ProductI } from '../../interfaces/productI';

@Component({
  selector: 'bulkly-coming-soon',
  imports: [Product],
  templateUrl: './coming-soon.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComingSoon {

  #productsLandingStore = inject(ProductsLandingStore);

  productsList: Signal<ProductI[]> = this.#productsLandingStore.comingSoonProductsListC;
  productsListError: Signal<any> = this.#productsLandingStore.productsListErrorC;
  productsListApiLoading: Signal<any> = this.#productsLandingStore.productsListApiLoading;

}
