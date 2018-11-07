import { Injectable } from "@angular/core";
import { RESTConnector } from "../providers/connector/restConnector";
import {Language} from "../models/enum";
@Injectable()
export class ResourceManager{
    private connector:RESTConnector;
    public static i18n:any={};
    public static language:string=Language.EN;
    private locales:Array<string>=[];
    constructor(rest:RESTConnector){
        this.connector=rest;
    }
    public reload(language:string):void{
        ResourceManager.language=language;
        this.load(this.locales);
    }
    public load(localeNames:Array<string>):Promise<any>{
        let self=this;
        self.locales=localeNames;
        let def=Promise.all(localeNames.map((name:string)=>{
            return self.loadByName(name);
        }));
        return def;
    }
    private loadByName(name:string):Promise<any>{
        let def=new Promise((resolve, rej)=>{
            let uri="http://angular.com/src/resource/locales/"+ name+"."+ResourceManager.language+".json";
            this.connector.get(uri).then((json: any)=>{
                ResourceManager.i18n[name]=json;
                resolve({});
            });
        });
        return def;
    }
}