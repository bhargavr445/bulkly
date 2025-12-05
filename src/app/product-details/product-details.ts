import { ChangeDetectionStrategy, Component, input as routeInput, computed } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'bulkly-product-details',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetails {

  id = routeInput.required<number>();

  tabList = computed(() => {
    return [
      { label: 'Details', navPath: `/product-details/${this.id()}/details` },
      { label: 'Test Reports', navPath: `/product-details/${this.id()}/test-reports` },
      { label: 'Certificates', navPath: `/product-details/${this.id()}/certificates` },
      { label: 'Vendor Info', navPath: `/product-details/${this.id()}/vendor-info` },
      { label: 'Q&A', navPath: `/product-details/${this.id()}/qa` }
    ]
  });

}
