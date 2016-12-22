import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {
    isLoggedin: boolean;

    constructor(private _http: Http) {

    }

    loginfn(usercreds: {}) {
        console.log(usercreds);
        // this.isLoggedin = false;
        // var headers = new Headers();
        // var creds = 'username=' + usercreds.username + '&password=' + usercreds.password;
        // headers.append('Content-Type', 'application/X-www-form-urlencoded');
        // return new Promise((resolve) => {
        //     this._http.post('http://localhost:3000/authenticate', creds, { headers: headers }).subscribe((data) => {
        //         if (data.json().success) {
        //             window.localStorage.setItem('auth_key', data.json().token);
        //             this.isLoggedin = true;
        //         }
        //         resolve(this.isLoggedin)
        //     }
        //     )

        // })
    }
}
