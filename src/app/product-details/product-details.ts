import { ChangeDetectionStrategy, Component, computed, input as routeInput, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BulklyNav } from "../commons/components/bulkly-nav/bulkly-nav";
import { TabsI } from '../interfaces/tabsI';

@Component({
  selector: 'bulkly-product-details',
  imports: [RouterOutlet, BulklyNav],
  templateUrl: './product-details.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetails {

  id = routeInput.required<number>();

  tabList: Signal<TabsI[]> = computed(() => {
    return [
      { label: 'Details', navPath: `/product-details/${this.id()}/details` },
      { label: 'Test Reports', navPath: `/product-details/${this.id()}/test-reports` },
      { label: 'Certificates', navPath: `/product-details/${this.id()}/certificates` },
      { label: 'Vendor Info', navPath: `/product-details/${this.id()}/vendor-info` },
      { label: 'Q&A', navPath: `/product-details/${this.id()}/qa` }
    ]
  });

  selectedTabEvent(event: TabsI) {
    console.log(event);
  }

}
