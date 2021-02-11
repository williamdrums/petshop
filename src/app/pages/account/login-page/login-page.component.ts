import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;

  constructor(private service: DataService, private fb: FormBuilder) {

    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.required
      ])],

      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  submit() {
    // sessionStorage.setItem()
    // localStorage.setItem()

    this.service.authenticate(this.form.value).subscribe((data: any) => {

      console.log(data);
      localStorage.setItem('petshop.token', data.token);
    }, (err) => {
      console.log(err);
    }
    );
  }

  ngOnInit(): void {

    const token = localStorage.getItem('petshop.token');
    if (token) {
      this.service.refreshToken().subscribe((data: any) => {
        localStorage.setItem('petshop.token', data.token);
      },
        (err) => {
          localStorage.clear();
        }
      );
    }
  }

}