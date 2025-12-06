import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: 'bulkly-info',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './info.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Info {

  #route = inject(ActivatedRoute);

  sectionIdLinked$ = this.#route.fragment;

}
