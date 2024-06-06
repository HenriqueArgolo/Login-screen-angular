import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-login-screen-layout',
  standalone: true,
  imports: [],
  templateUrl: './login-screen-layout.component.html',
  styleUrl: './login-screen-layout.component.scss'
})
export class LoginScreenLayoutComponent {
@Input() title: string =""; 
@Input() primaryBtnText: String = ""
@Input() secundaryBtnText: String = ""

}

