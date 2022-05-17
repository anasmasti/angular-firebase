import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  errorMessage: string = '';
  constructor(public authService: AuthenticationService) {}
  ngOnInit() {}

  signUp(email: any, password: any) {
    this.authService.SignUp(email, password).catch((error) => {
      this.errorMessage = error;
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    });
  }
}
