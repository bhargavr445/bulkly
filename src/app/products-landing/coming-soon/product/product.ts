import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProductI } from '../../../interfaces/productI';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'bulkly-coming-soon-product',
  imports: [DatePipe],
  templateUrl: './product.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Product {

  product = input.required<ProductI>();


}
