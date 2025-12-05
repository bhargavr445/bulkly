import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bulkly-product',
  imports: [],
  templateUrl: './product.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Product {

  // image = input.required<string>();
  // header = input.required<string>();
  // subHeader = input.required<string>();
  // totalQuantity = input.required<string>();
  // noOfOrdersPlaced = input.required<string>();
  // daysLeft = input.required<number>();
  // fundecPercent = input.required<number>();
  // originalPrice = input.required<number>();
  // discountPrice = input.required<number>();
  percent = input.required<number>();

}
