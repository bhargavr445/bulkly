import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./commons/footer/footer";
import { Header } from "./commons/header/header";

@Component({
  selector: 'bulkly-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('bulkly');
}
