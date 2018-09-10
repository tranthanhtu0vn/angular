import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";
@Injectable()
export class UserService {
    private http: Http;
    constructor(http: Http) {
        this.http = http;
    }
    public getUsers(): Promise<any> {
        let uri = "https://angularnetapi.azurewebsites.net/api/users";
        let header: Headers = new Headers();
        header.append("accept", "application/json");
        let self=this;
        let def = new Promise((resolve, reject) => {
            self.http.get(uri, { headers: header })
                .map((response: any) => response.json())
                .subscribe((dataInJson: any) => { resolve(dataInJson) });
        });
        return def;
    }

    public getUser(userId: string): any {
        throw "exception";
    }

    public save(user: any): void {
        throw "exception";
    }

}