import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
@Injectable()
export class RESTConnector{
    private static NumberOfInstance:number=0;
    private http: Http;
    constructor(http: Http){
        this.http=http;
        RESTConnector.NumberOfInstance+=1;
        console.log("RestConnector number:"+ RESTConnector.NumberOfInstance);
    }
    public get(uri: string):Promise<any>{
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
    public put(uri: string, data: any):Promise<any>{
        let header: Headers = new Headers();
        header.append("accept", "application/json");
        let self=this;
        let def = new Promise((resolve, reject) => {
            self.http.put(uri, data, { headers: header })
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
            self.http.post(uri, data, { headers: header })
                .map((response: any) => response.json())
                .subscribe((dataInJson: any) => { resolve(dataInJson) });
        });
        return def;
    }
}