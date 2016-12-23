import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
    isLoggedin: boolean = false;
    URL: string = 'http://localhost:3000/authenticate';

    constructor(private _http: Http) {

    }

    login(usercreds: any) {
        this.isLoggedin = false;
        let headers = new Headers();
        let creds = 'username=' + usercreds.username + '&password=' + usercreds.password;

        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this._http.post(this.URL, creds, { headers })
            .map((response: Response) => <any[]>response.json())
            .do((data: any) => {
                window.localStorage.setItem('auth_key', data.token);
                this.isLoggedin = true;
            })
            .catch(this.handleError);
    }

    logout() {
        this.isLoggedin = false;
        window.localStorage.removeItem('auth_key');
    }

    private handleError(error: Response) {
        return Observable.throw(error);
    }
}
