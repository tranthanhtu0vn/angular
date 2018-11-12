import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { IConnector } from "./iconnector";

export class RESTConnector implements IConnector{
    private static NumberOfInstance:number=0;
    constructor(){
        RESTConnector.NumberOfInstance+=1;
        console.log("REST Connector:", RESTConnector.NumberOfInstance);
    }
    public get(uri: string):Promise<any>{
        let header: Headers = new Headers();
        header.append("accept", "application/json");
        let self=this;
        let def = new Promise((resolve, reject) => {
            let http= window.ioc.resolve(Http);
            http.get(uri, { headers: header })
                .map((response: any) => response.json())
                .subscribe((dataInJson: any) => { resolve(dataInJson) });
        });
        return def;
    }
    public put(uri: string, data: any):Promise<any>{
        let header: Headers = new Headers();
        header.append("accept", "application/json");
        let self=this;
        let def = new Promise((resolve, reject) => {
            let http= window.ioc.resolve(Http);
            http.put(uri, data, { headers: header })
                .map((response: any) => response.json())
                .subscribe((dataInJson: any) => { resolve(dataInJson) });
        });
        return def;
    }

    public post(uri: string, data: any):Promise<any>{
        let header: Headers = new Headers();
        header.append("accept", "application/json");
        let self=this;
        let def = new Promise((resolve, reject) => {
            let http= window.ioc.resolve(Http);
            http.post(uri, data, { headers: header })
                .map((response: any) => response.json())
                .subscribe((dataInJson: any) => { resolve(dataInJson) });
        });
        return def;
    }
}