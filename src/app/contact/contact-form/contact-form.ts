import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Field, form, maxLength, required } from '@angular/forms/signals';

@Component({
  selector: 'bulkly-contact-form',
  imports: [Field],
  templateUrl: './contact-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactForm {

  formMetaData = signal<ContactFormI>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  contactForm = form(this.formMetaData, (path) => {
    required(path.name, { message: requiredMessage }),
      required(path.email, { message: requiredMessage }),
      required(path.subject, { message: requiredMessage }),
      maxLength(path.subject, 20, { message: requiredMessage })
  })

  sendMessage(event: Event) {
    event.preventDefault();
    this.contactForm().markAsTouched();
    console.log(this.contactForm().value());
  }

}

interface ContactFormI {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const requiredMessage = 'This is required field.'