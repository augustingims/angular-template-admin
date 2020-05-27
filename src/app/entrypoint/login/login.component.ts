import {Component, ElementRef, OnInit, Renderer} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: [''],
    password: [''],
    rememberMe: [true]
  });

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    document.body.className = 'hold-transition login-page';
    window.dispatchEvent(new Event('resize'));
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });

    setTimeout(() => this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []), 0);

  }

  login() {
    this.router.navigate(['/ui']);
  }

}
