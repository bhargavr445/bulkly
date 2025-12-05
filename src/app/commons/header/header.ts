import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'bulkly-header',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {

  mobileOpen = signal(false);
  scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 20);   // shrink after 20px scroll
  }

  closeMobileMenu() {
    this.mobileOpen.set(false);
  }

}
