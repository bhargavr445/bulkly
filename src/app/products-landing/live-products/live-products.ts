import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Product } from "./product/product";
import { ProductsService } from '../../commons/services/products-service';

@Component({
  selector: 'bulkly-live-products',
  imports: [Product],
  templateUrl: './live-products.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveProducts {
  
  #productsService = inject(ProductsService);

  constructor() {
    this.getLiveProducts();
  }

  getLiveProducts() {
    this.#productsService.fetchLiveProducrs().subscribe(
      (response) => {console.log(response)},
      (error) => {console.log(error)},
    )
  }


}
