import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

@Component({
  selector: 'bulkly-info',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './info.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Info {

  #route = inject(ActivatedRoute);
  #router = inject(Router);

  sectionIdLinked$ = this.#route.fragment;

  navigateTo(path: string) {
    this.#router.navigate([path]);
  }

}
