import { Component } from '@angular/core';
import { LoginScreenLayoutComponent } from '../../components/login-screen-layout/login-screen-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginScreenLayoutComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
