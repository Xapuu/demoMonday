import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

const url = 'http://localhost:5000'
const signUp = '/authdas/signup'


@Injectable()
export class Auth {

    constructor(private http: HttpClient) { }


    registerUser(payload) {
        return this.http.post(url + signUp, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}