import { IIoCRegistration } from "./iiocRegistration";
import { Injector } from "@angular/core";
import { IoCLifeCycle } from "./enum";
import {IIoCRegistrationFactory} from "./iiocRegistrationFactory";
import {IoCSingletonRegistrationFactory} from "./iocSingletonRegistrationFactory";
import {IoCTransientRegistrationFactory} from "./iocTransientRegistrationFactory";
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
        let item:IIoCRegistration = this.registrations[name];
        let factory:IIoCRegistrationFactory=this.getFactory(item);
        return factory.create();
    }
    private getFactory(item: IIoCRegistration):IIoCRegistrationFactory{
        switch(item.lifecycle){
            case IoCLifeCycle.Singletone:
                return new IoCSingletonRegistrationFactory(item);
            case IoCLifeCycle.Transient:
            default:
                return new IoCTransientRegistrationFactory(item);
        }
    }
    private resolveFromAngular(type: any){
        return this.injector.get(type);
    }
}