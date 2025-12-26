import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SignupFormI } from '../../interfaces/auth/signup-form';
import { ApiUrl } from '../api-constants';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {

  #httpClient = inject(HttpClient);

  verifyEmail(emailId: string) {
    return this.#httpClient.post(ApiUrl.sendEmailVerificationCodeUrl, { emailId });
  }

  register(payload: SignupFormI) {
    return this.#httpClient.post(ApiUrl.registerUrl, payload);
  }

}
