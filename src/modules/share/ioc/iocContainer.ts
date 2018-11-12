import { IIoCRegistration } from "./iiocRegistration";
import { Injector } from "@angular/core";

export class IoCContainer{
    private registrations: any={};
    private injector: Injector;
    constructor(injector: Injector){
        this.injector=injector;
    }
    public import(items: Array<IIoCRegistration>){
        if(!items || items.length<=0){return;}
        let self=this;
        items.forEach((item: IIoCRegistration)=>{
            self.registrations[item.name]=item;
        });
    }
    public resolve(type:any):any{
        if(typeof type =="function"){
            return this.resolveFromAngular(type);
        }
        let name=type;
        if(!this.registrations[name]){throw "Invalid name for IoC resolve method";}
        return new this.registrations[name].instance();
    }
    private resolveFromAngular(type: any){
        return this.injector.get(type);
    }
}