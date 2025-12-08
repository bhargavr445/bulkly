import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'bulkly-coming-soon',
  imports: [Product],
  templateUrl: './coming-soon.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComingSoon {

}
