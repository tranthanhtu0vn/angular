import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";
import {IConnector} from "../share/providers/connector/iconnector";
import {IoCNames} from "../share/models/enum";
@Injectable()
export class UserService {
    public getUsers(): Promise<any> {
        let connector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        let uri = "https://angularnetapi.azurewebsites.net/api/users";
        return connector.get(uri);
    }

    public getUser(userId: string): any {
        let connector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        let uri = "https://angularnetapi.azurewebsites.net/api/users/"+ userId;
        return connector.get(uri);
    }

    public save(userId:string,  updateRequest: any): Promise<any> {
        let connector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        let uri = "https://angularnetapi.azurewebsites.net/api/users/"+ userId;
        return connector.put(uri, updateRequest);
    }

    public create(request: any): Promise<any> {
        let connector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        let uri = "https://angularnetapi.azurewebsites.net/api/users";
        return connector.post(uri, request);
    }
}