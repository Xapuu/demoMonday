import { Component, OnInit } from '@angular/core';

import {
  Validators,
  FormBuilder,
  FormGroup,
  AbstractControl
} from '@angular/forms'

import { Auth } from './../../../services/auth.service'

const mailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  constructor(private fb: FormBuilder, private auth: Auth) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(new RegExp(mailPattern))]],
      name: ['', [Validators.minLength(2), Validators.maxLength(25)]],
      confirmPasswords: this.fb.group({
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      }, {
          validator: this.matchPasswords
        })
    })
  }

  matchPasswords(AC: AbstractControl) {
    let password = AC.get('password').value; // to get value in input tag
    let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
    if (password != confirmPassword) {
      AC.get('confirmPassword').setErrors({ MatchPassword: true })
      return false
    } else {
      return null
    }
  }

  submitRegisterForm(payload) {
    let parsedPayload = payload.value
    console.log(parsedPayload)
    let transformFunc = (data) => {
      let userPayload = {
        name: data.name,
        email: data.email,
        password: data.confirmPasswords.password
      }

      return userPayload
    }

    this.auth.registerUser(transformFunc(parsedPayload)).subscribe(res => {
      console.log(res)
    })
  }

}


