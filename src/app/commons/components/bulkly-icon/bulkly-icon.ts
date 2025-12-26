import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bulkly-icon',
  imports: [RouterLink],
  templateUrl: './bulkly-icon.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulkliIcon {

}
