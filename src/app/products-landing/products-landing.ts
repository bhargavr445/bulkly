import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Work } from "./work/work";
import { SubHeader } from "./sub-header/sub-header";
import { LiveProducts } from "./live-products/live-products";
import { ComingSoon } from "./coming-soon/coming-soon";

@Component({
  selector: 'bulkly-products-landing',
  imports: [Work, SubHeader, LiveProducts, ComingSoon],
  templateUrl: './products-landing.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsLanding {



}
