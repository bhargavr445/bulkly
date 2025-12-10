import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'bulkly-sub-header',
  imports: [],
  templateUrl: './sub-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubHeader {

  router = inject(Router);

  subHeaderItemsList = [
    { label: 'Quality Verified', icon: '✓', navPath: 'quality_verified' },
    { label: '100% Guaranteed', icon: '🛡️', navPath: 'guaranteed' },
    { label: 'Fair Pricing', icon: '📈', navPath: 'fair_pricing' },
    { label: 'Direct from Makers', icon: '👥', navPath: 'direct_from_makers' },
  ];

  scrollTo(id: string) {
    this.router.navigate([`info`], { fragment: id });
  }

}
