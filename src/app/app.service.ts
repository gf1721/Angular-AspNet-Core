import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
    private greetUrl = 'api/Hello';
    // Resolve HTTP using the constructor
    constructor(private _http: Http) { }

    findJSON(): Observable<any> {
        return this._http.get('/api/todo').map((response: Response) => {
            return response.json();
        });
    }

    sendText(text: string): Observable<any> {
        const body = {name: text};
        return this._http.post('/api/todo',body).map(res => res.json());
    }

    sayHello(): Observable<any> {
        return this._http.get(this.greetUrl).map((response: Response) => {
            return response.text();
        });
    }
}