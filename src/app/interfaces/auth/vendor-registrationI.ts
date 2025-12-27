export interface VendorInfoI {
    vendorInfo: VendorRegistrationI
}

export interface VendorRegistrationI {
  companyName: string;
  companyAddress: string;
  ownerName: string;
  ownerEmail: string;
  ownerMobileNumber: string;
  password: string;
  confirmPassword: string;
}