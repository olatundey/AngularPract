import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';
import { RegistrationService } from './registration.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  registrationForm: FormGroup;

get userName() {
  return this.registrationForm.get('userName');
}
get confirmPassword() {
  return this.registrationForm.get('confirmPassword');
}
get email() {
  return this.registrationForm.get('email');
}

get alternateEmails() {
  return this.registrationForm.get('alternateEmails') as FormArray;
}

addAlternateEmail() {
  this.alternateEmails.push(this.fb.control(''));
}


constructor(private fb: FormBuilder, private _registrationService: RegistrationService) {
  this.registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password|admin/)]],
    email: [''],
    subscribe: [false],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    address: this.fb.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required]
    }), alternateEmails: this.fb.array([])
  }
  //, {validator: PasswordValidator}
  );

  // console.log(PasswordValidator(this.registrationForm));
  //  // Optional: Log the form group to the console
  //  console.log(this.registrationForm.value);

  //  // Optional: Set a listener for form changes
  //   this.registrationForm.valueChanges.subscribe((formValue) => {
  //    console.log('Form value changes: ', formValue);
  //   });

 }
  
ngOnInit() {
      // Handle the valueChanges of the 'subscribe' control
  //returns an Observable, so subscribe to it
  this.registrationForm.get('subscribe')?.valueChanges.subscribe(checkedValue => {
    const email = this.registrationForm.get('email');
    if (email) {
      if (checkedValue) {
        email.setValidators(Validators.required);
      } else {
        email.clearValidators();
      }
      email.updateValueAndValidity();
    }
  });

  // Do something when the 'subscribe' control changes

}

// registrationForm = new FormGroup({
//   userName: new FormControl('Hi'),
//   password: new FormControl(''),
//   confirmPassword: new FormControl(''),
//   address: new FormGroup({
//     city: new FormControl(''),
//     state: new FormControl(''),
//     postalCode: new FormControl(''),
//   })
// });


// loadAPIData() {
//   this.registrationForm.setValue({
//     userName: 'Bruce',
//     email: 'a@b.com',
//     subscribe: false,
//     password: 'test',
//     confirmPassword: 'test',
//     address: {
//       city: 'City',
//       state: 'State',
//       postalCode: '123456'
//     }
//   });
// }

loadAPIData() {
  this.registrationForm.patchValue({
    userName: 'Bruce',
    password: 'test',
    confirmPassword: 'test'
  });
}

onSubmit() {
  console.log(this.registrationForm.value);
  this._registrationService.register(this.registrationForm.value).subscribe({
    next: (response) => console.log('Success!', response),
    error: (error) => console.error('Error!', error),
  });
}



}
