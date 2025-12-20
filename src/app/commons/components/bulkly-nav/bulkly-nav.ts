import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TabsI } from '../../../interfaces/tabsI';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'bulkly-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './bulkly-nav.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulklyNav {

  tabList = input.required<TabsI[]>();
  selectedTabInfo = output<TabsI>();

  selectedTab(tabInfo: TabsI): void {
    console.log(tabInfo);
    this.selectedTabInfo.emit(tabInfo);
  }

}
