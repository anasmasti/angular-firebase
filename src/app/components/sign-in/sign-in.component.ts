import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  errorMessage: string = '';

  constructor(public authService: AuthenticationService) {}
  ngOnInit() {}

  signIn(email: any, password: any) {
    this.authService.SignIn(email, password).catch((error) => {
      this.errorMessage = error;
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    });
  }
}
