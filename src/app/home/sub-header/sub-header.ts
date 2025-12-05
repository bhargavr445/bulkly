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

  scrollTo(id: string) {
    this.router.navigate([`info/${id}`]);
  }

}
