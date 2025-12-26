import { ChangeDetectionStrategy, Component, computed, inject, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Field, form, required, SchemaPathTree } from '@angular/forms/signals';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { BulkliIcon } from '../../../commons/components/bulkly-icon/bulkly-icon';
import { ValidationMessages } from '../../../commons/validation-messages.constants';

@Component({
  selector: 'bulkly-login',
  imports: [Field, BulkliIcon],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {

  #router = inject(Router);
  #route = inject(ActivatedRoute);

  logInType: Signal<USER_TYPE> = toSignal(this.#route.data.pipe(map((routeData) => routeData['type'])));
  computedUserType = computed(() => formConfig[this.logInType()]);

  loginSignal = signal<LoginFormI>({
    email: "",
    password: ""
  });

  loginForm = form(this.loginSignal, (path: SchemaPathTree<LoginFormI>) => {
    required(path.email, { message: ValidationMessages.requiredMessage }),
      required(path.password, { message: ValidationMessages.requiredMessage })
  });

  login(event: Event) {

  }

  navigateTo(path: string) {
    this.#router.navigate([path]);
  }

}

export interface LoginFormI {
  email: string;
  password: string;
}

type USER_TYPE = 'CUSTOMER' | 'VENDOR';

const formConfig = {
  VENDOR: {
    formLabel: 'Vendor',
    userLabel: 'Email or Mobile Number',
    placeholder: 'your.email@company.com or +91 9873589732'
  },
  CUSTOMER: {
    formLabel: 'Customer',
    userLabel: 'Email Address',
    placeholder: 'your.email@company.com'
  }

} 