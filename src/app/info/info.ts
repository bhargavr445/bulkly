import { ChangeDetectionStrategy, Component, effect, linkedSignal, input as routeInput } from '@angular/core';

@Component({
  selector: 'bulkly-info',
  imports: [],
  templateUrl: './info.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Info {

  sectionId = routeInput.required<string>();
  sectionIdLinked = linkedSignal(() => this.sectionId());

  constructor() {
    effect(() => {
      this.scrollTo(this.sectionId())
    })
  }

  scrollTo(id: string): void {
    this.sectionIdLinked.set(id);
    const element = document.getElementById(id);
    if (!element) {
      return;
    }
    const headerOffset = 90;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

}
