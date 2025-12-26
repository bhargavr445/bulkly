import { pattern, required, schema, Schema, validateHttp } from "@angular/forms/signals";
import { ApiUrl } from "../api-constants";
import { ValidationMessages } from "../validation-messages.constants";

/**
 * this schema adds 3 validations, Required, Pattern and Async
 */
export const emailValidatorSchema: Schema<string> = schema((emailControl) => {
    /* required */
    required(emailControl, { message: ValidationMessages.requiredMessage }),
        /* pattern */
        pattern(emailControl, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: 'Enter email pattern' }),
        /* async  */
        validateHttp(emailControl, {
            request: (context) => ({
                url: ApiUrl.emailAvailableUrl,
                method: 'POST',
                body: { emailId: context.value() }
            }),
            onSuccess: (response) => {
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
})