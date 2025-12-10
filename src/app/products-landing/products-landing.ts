import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComingSoon } from "./coming-soon/coming-soon";
import { LiveProducts } from "./live-products/live-products";
import { SubHeader } from "./sub-header/sub-header";
import { Work } from "./work/work";

@Component({
  selector: 'bulkly-products-landing',
  imports: [Work, SubHeader, LiveProducts, ComingSoon],
  templateUrl: './products-landing.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsLanding {



}
