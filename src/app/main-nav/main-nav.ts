import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../commons/components/header/header';
import { Footer } from '../commons/components/footer/footer';

@Component({
  selector: 'bulkly-main-nav',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './main-nav.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainNav {

}
