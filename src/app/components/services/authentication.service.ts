import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

import { UserPayload } from '@models'

const baseUrl = 'http://localhost:5000/'
const singUp = 'auth/singup'
const login = 'auth/login'


@Injectable()
export class AutorizationService {

    constructor(private http: HttpClient) { }

    register(payload: UserPayload) {
        return this.http.post<UserPayload>(baseUrl + singUp, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    login(payload: UserPayload) {
        return this.http.post<UserPayload>(baseUrl + login, payload, {
            headers: {
                'Contet-Type': 'application/json0'
            }
        })
    }
}