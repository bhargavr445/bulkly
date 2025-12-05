import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactForm } from "./contact-form/contact-form";
import { ContactInfo } from "./contact-info/contact-info";
import { ManufacturerInfo } from "./manufacturer-info/manufacturer-info";

@Component({
  selector: 'bulkly-contact',
  imports: [ContactForm, ManufacturerInfo, ContactInfo],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contact {

}
