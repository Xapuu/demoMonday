import { Component, OnInit } from '@angular/core';

import { AutorizationService } from './../../services/authentication.service'
import { UserPayload } from '@models'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  private modelOfAlabala: UserPayload;
  constructor(
    private auth: AutorizationService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.registerForm = this.loadForm()
  }

  loadForm() {
    return this.fb.group({
      email: ['', [Validators.required]],
      username: ['', [Validators.required]],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      })
    })
  }

  register(user: UserPayload) {
    console.log(user);
  }

}
