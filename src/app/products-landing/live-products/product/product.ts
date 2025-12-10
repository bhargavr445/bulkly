import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import { ProductsLandingStore } from '../../store/products-landing-store';

@Component({
  selector: 'bulkly-product',
  imports: [],
  templateUrl: './product.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Product {

  #router = inject(Router);
  #productsLandingStore = inject(ProductsLandingStore);

  product = input.required<any>();

  percent = computed(() => Math.round((this.product().ordersPlaced / this.product().ordersRequired) * 100));
  noOfDaysLeft = computed(() => this.#calculateNoOfDaysLeft(this.product().orderCutOffDate));

  #calculateNoOfDaysLeft(date): number {
    const todaysDate = new Date();
    return differenceInCalendarDays(date, todaysDate);
  }

  navigateToProductDetails(id: number): void {
    this.#productsLandingStore.fetchProductById(id);
    this.#router.navigate([`product-details/${id}`]);
  }

}
