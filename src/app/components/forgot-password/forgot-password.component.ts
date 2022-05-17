import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  errorMessage: string = '';
  successMessage: string = '';
  constructor(public authService: AuthenticationService) {}
  ngOnInit() {}
  resetPassword(email: any) {
    this.authService
      .ForgotPassword(email)
      .then(() => {
        this.successMessage =
          'E-mail de réinitialisation du mot de passe envoyé, vérifiez votre boîte email.';
      })
      .catch((error) => {
        this.errorMessage = error;
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      });
  }
}
