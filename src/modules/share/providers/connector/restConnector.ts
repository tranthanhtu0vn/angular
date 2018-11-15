import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { IConnector } from "./iconnector";
import {HttpStatusCode, IoCNames, ValidationStatus} from "../../models/enum";
import {IValidationError} from "../../models/ivalidationError";
import { IEventManager } from "../../event/ieventManager";
import {ValidationEvent} from "../../event/validationEvent";
import { NO_ERRORS_SCHEMA } from "@angular/compiler/src/core";
 
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
                .subscribe(
                    (dataInJson: any) => { self.resolveResponse(dataInJson, resolve); },
                    (errors: any)=> {self.handleException(errors);}
                );
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
                .subscribe(
                    (dataInJson: any) => { self.resolveResponse(dataInJson, resolve); },
                    (errors: any)=> {self.handleException(errors);}
                );
        });
        return def;
    }
    private handleException(response: any):void{
        switch(response.status){
            // other exception cases ......
            case HttpStatusCode.BadRequest:
            default:
                let errors: Array<IValidationError> = response.json().errors;
                this.onResponseError(errors);
                break;
        }
    }
    private resolveResponse(response: any, resolve: any){
        if(response && response.status==HttpStatusCode.BadRequest){
            let errors: Array<IValidationError> = response.errors||[];
            this.onResponseError(errors);
            resolve();
            return;
        }
        let data=response.data|| response;
        resolve(data);
    }
    private onResponseError(errors: Array<IValidationError>):void{
        if(!errors || errors.length<=0){return;}
        let eventManager: IEventManager = window.ioc.resolve(IoCNames.IEventManager);
        errors.forEach((ev: IValidationError)=>{
            eventManager.publish(new ValidationEvent(ev.key, ValidationStatus.Failed));
        });
    }

    public post(uri: string, data: any):Promise<any>{
        let header: Headers = new Headers();
        header.append("accept", "application/json");
        let self=this;
        let def = new Promise((resolve, reject) => {
            let http= window.ioc.resolve(Http);
            http.post(uri, data, { headers: header })
                .map((response: any) => response.json())
                .subscribe(
                    (dataInJson: any) => { self.resolveResponse(dataInJson, resolve); },
                    (errors: any)=> {self.handleException(errors);}
                );
        });
        return def;
    }
}