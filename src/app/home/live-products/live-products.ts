import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Product } from "./product/product";

@Component({
  selector: 'bulkly-live-products',
  imports: [Product],
  templateUrl: './live-products.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveProducts {

}
