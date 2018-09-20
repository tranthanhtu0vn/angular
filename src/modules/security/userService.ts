import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";
import {RESTConnector} from "../share/providers/connector/restConnector";
@Injectable()
export class UserService {
    private connector: RESTConnector;
    constructor(rest: RESTConnector) {
        this.connector=rest;
    }
    public getUsers(): Promise<any> {
        let uri = "https://angularnetapi.azurewebsites.net/api/users";
        return this.connector.get(uri);
    }

    public getUser(userId: string): any {
        let uri = "https://angularnetapi.azurewebsites.net/api/users/"+ userId;
        return this.connector.get(uri);
    }

    public save(userId:string,  updateRequest: any): Promise<any> {
        let uri = "https://angularnetapi.azurewebsites.net/api/users/"+ userId;
        return this.connector.put(uri, updateRequest);
    }

    public create(request: any): Promise<any> {
        let uri = "https://angularnetapi.azurewebsites.net/api/users";
        return this.connector.post(uri, request);
    }
}