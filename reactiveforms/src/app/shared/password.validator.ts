import { AbstractControl, FormGroup } from "@angular/forms";


export function PasswordValidator(control: AbstractControl): { [key:string]: boolean} | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password?.pristine || confirmPassword?.pristine) {
      return null;
    }
    return password && confirmPassword &&  password.value !== confirmPassword.value ? 
    { 'mismatch' : true } : null;
}


// export function  PasswordValidator(control: FormGroup) {
//     const password = control.get('password');
//     const confirmPassword = control.get('confirmPassword');

//     if (password && confirmPassword && password.value !== confirmPassword.value) {
//       return { mismatch: true };
//     }

//     return null;
//   }
