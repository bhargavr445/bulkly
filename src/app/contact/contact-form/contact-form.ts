import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Field, form, maxLength, required } from '@angular/forms/signals';

@Component({
  selector: 'bulkly-contact-form',
  imports: [Field],
  templateUrl: './contact-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactForm {

  formMetaData = signal({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  contactForm = form(this.formMetaData, (path) => {
    required(path.name),
    required(path.email),
    required(path.subject),
    maxLength(path.subject, 20)
  })

  sendMessage(event: any) {
    event.preventDefault();
    console.log(this.contactForm().value());
  }

}
