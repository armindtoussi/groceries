import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User }   from './user';
import { Config } from '../config';

@Injectable()
export class UserService {

    constructor(private _http: Http) { }

    register(user: User): Observable<{} | Response> {
        return this._http.post(
            Config.apiUrl + "user/" + Config.appKey,
            JSON.stringify({
                username: user.email,
                email: user.email,
                password: user.password
            }), 
            { headers: this.getCommonHeaders() }
        )
        .catch(this.handleErrors);
    }

    getCommonHeaders(): Headers {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", Config.authHeader);
        return headers;
    }

    handleErrors(error: Response): Observable<Response> {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}