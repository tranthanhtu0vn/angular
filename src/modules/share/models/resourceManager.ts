import { Injectable } from "@angular/core";
import {Language, IoCNames} from "../models/enum";
import { IConnector } from "../providers/connector/iconnector";
@Injectable()
export class ResourceManager{
    public static i18n:any={};
    public static language:string=Language.EN;
    private locales:Array<string>=[];
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
            let connector:IConnector = window.ioc.resolve(IoCNames.IConnector);
            connector.get(uri).then((json: any)=>{
                ResourceManager.i18n[name]=json;
                resolve({});
            });
        });
        return def;
    }
}