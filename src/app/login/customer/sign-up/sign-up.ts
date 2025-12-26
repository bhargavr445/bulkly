import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { apply, Field, form, minLength, required, SchemaPathTree } from '@angular/forms/signals';
import { Otp } from '../../../commons/components/otp/otp';
import { AuthApiService } from '../../../commons/services/auth-api-service';
import { SignupFormI } from '../../../interfaces/auth/signup-form';
import { ValidationMessages } from '../../../commons/validation-messages.constants';
import { emailValidatorSchema } from '../../../commons/validation-schema/validations';
import { Router } from '@angular/router';
import { BulkliIcon } from '../../../commons/components/bulkly-icon/bulkly-icon';

@Component({
  selector: 'bulkly-sign-up',
  imports: [Field, Otp, BulkliIcon],
  templateUrl: './sign-up.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUp {

  #authApiService = inject(AuthApiService);
  #router = inject(Router);

  signup = signal<SignupFormI>({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    emailVerificationCode: ""
  })

  signUpForm = form(this.signup, (path:SchemaPathTree<SignupFormI>) => {
    required(path.name, { message: ValidationMessages.requiredMessage }),
      required(path.mobileNumber, { message: ValidationMessages.requiredMessage }),
      required(path.password, { message: ValidationMessages.requiredMessage }),
      required(path.confirmPassword, { message: ValidationMessages.requiredMessage }),
      required(path.emailVerificationCode, { message: ValidationMessages.requiredMessage }),
      minLength(path.emailVerificationCode, 6, { message: '6 digits' }),
      apply(path.email, emailValidatorSchema)
  });

  createAccount(event: Event): void {
    console.log(history.state);
          history.go(-1);
    
    event.preventDefault();
    // this.signUpForm().markAsTouched();
    // if (this.signUpForm().valid()) {
    //   const payload: SignupFormI = this.signUpForm().value();
    //   this.#authApiService.register(payload).subscribe({
    //     next: (response) => { 
    //       console.log(response);
    //       history.go(-1);
    //     },
    //     error: (error) => { 
    //       console.log(error);
    //     }
    //   })
    // }
  }

  verifyEmail(): void {
    console.log(this.signUpForm().value().email);
    if (this.signUpForm.email().valid()) {
      this.#authApiService.verifyEmail(this.signUpForm().value().email).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        },
      })
    }
  }

  otpEmitter(event: string[]): void {
    this.signup.update(prev => ({...prev, emailVerificationCode: event.join('')}))
  }

  navigateTo(path) {
    this.#router.navigate([path]);
  }

}


