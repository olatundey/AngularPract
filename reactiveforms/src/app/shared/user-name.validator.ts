import { AbstractControl, ValidatorFn } from "@angular/forms";

//only one param of formControl
// export function forbiddenNameValidator(control: AbstractControl): {[key: string]: any} | null {
//     const forbidden = /admin/.test(control.value);
//     return forbidden ? { 'forbiddenName': {value: control.value}} : null;   
// }

//Factory function, use a declared param
export function forbiddenNameValidator (forbiddenName : RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => 
{
    const forbidden = forbiddenName.test(control.value);
    return forbidden ? { 'forbiddenName': {value: control.value}} : null;    
}
}

//specify pattern as a parameter