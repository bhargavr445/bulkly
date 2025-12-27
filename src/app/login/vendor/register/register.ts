import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { VendorInfoI, VendorRegistrationI } from '../../../interfaces/auth/vendor-registrationI';
import { Field, form, required, SchemaPathTree } from '@angular/forms/signals';
import { BulkliIcon } from "../../../commons/components/bulkly-icon/bulkly-icon";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'bulkly-register',
  imports: [BulkliIcon, Field],
  templateUrl: './register.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register {

  #router = inject(Router);

  showStep1 = signal(true);

  registration = signal<VendorRegistrationI>({
   companyName: '',
    companyAddress: '',
    ownerName: '',
    ownerEmail: '',
    ownerMobileNumber: '',
    password: '',
    confirmPassword: ''
  });

  productInfo = signal({
    productName: ''
  })

  productInfoForm = form(this.productInfo)

  registrationForm = form(this.registration, (path: SchemaPathTree<VendorRegistrationI>) => {

    required(path.companyName)
    required(path.companyAddress)
    required(path.ownerEmail)
    required(path.ownerMobileNumber)
    required(path.ownerName)
    required(path.password)
    required(path.confirmPassword)

  });

  goToProductInfo(event: Event) {
    this.showStep1.set(false);
    event.preventDefault();
  }

  back() {
  this.showStep1.set(true);
  }

  navigateTo(path: string) {
    this.#router.navigate([path]);
  }

}

