import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
    user = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: ''
    };
    submitted = false;
    passwordStrengthError = false;
    passwordsMatchError = false;

    onSubmit() {
        this.submitted = true;
    }

    checkPasswordStrength() {
      const password = this.user.password;
      const uppercaseRegex = new RegExp('(?=.*[A-Z])');
      const lowercaseRegex = new RegExp('(?=.*[a-z])');
      const digitRegex = new RegExp('(?=.*[0-9])');
      const specialCharRegex = new RegExp('(?=.*[!@#$%^&*])');

      this.passwordStrengthError = !(
          uppercaseRegex.test(password) &&
          lowercaseRegex.test(password) &&
          digitRegex.test(password) &&
          specialCharRegex.test(password) &&
          password.length >= 6
      );
    }
    checkPasswordsMatch() {
      this.passwordsMatchError = this.user.password !== this.user.confirmPassword;
  }
}
