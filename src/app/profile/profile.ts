import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BulklyNav } from "../commons/components/bulkly-nav/bulkly-nav";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'bulkly-profile',
  imports: [BulklyNav, RouterOutlet],
  templateUrl: './profile.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Profile {

  tabs = [
    { label: 'Current Orders', navPath: '/profile/current-orders' },
    { label: 'Past Orders', navPath: '/profile/past-orders' }
  ];

}
