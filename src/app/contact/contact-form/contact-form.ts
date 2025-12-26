import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { debounce, Field, form, maxLength, required, SchemaPathTree, validateHttp } from '@angular/forms/signals';
import { ApiUrl } from '../../commons/api-constants';
import { ValidationMessages } from '../../commons/validation-messages.constants';

@Component({
  selector: 'bulkly-contact-form',
  imports: [Field],
  templateUrl: './contact-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactForm {

  isEmailAvailable = signal(false);

  formMetaData = signal<ContactFormI>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  contactForm = form(this.formMetaData, (path) => {
    required(path.name, { message: ValidationMessages.requiredMessage }),
      required(path.email, { message: ValidationMessages.requiredMessage }),
      required(path.subject, { message: ValidationMessages.requiredMessage }),
      maxLength(path.subject, 20, { message: ValidationMessages.requiredMessage }),
      debounce(path.email, 200),
      this.#checkIfEmailExist(path)
  })

  #checkIfEmailExist(path: SchemaPathTree<ContactFormI>) {
    validateHttp(path.email, {
      request: (context) => ({
        url: ApiUrl.emailAvailableUrl,
        method: 'POST',
        body: { emailId: context.value() }
      }),
      onSuccess: (response) => {
        console.log(response);
        if (!response) {
          return null;
        } else {
          return { kind: 'email_available', message: 'This email already exists.' };
        }
      },
      onError: (error, ctx) => {
        return { kind: 'email_API_failed', message: 'Failed to test' }
      },
    })
  }

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
