import { IoCNames,ValidationStatus } from "../models/enum";
import {IEventManager} from "../event/ieventManager";
import {ValidationEvent} from "../event/validationEvent";
export function required(errorKey: string): any{
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        let internalVal="";
        let setFunc=function(val: string){
            internalVal=val;
            let status:ValidationStatus = !val || val==""? ValidationStatus.Failed: ValidationStatus.Passed;
            let eventManager: IEventManager = window.ioc.resolve(IoCNames.IEventManager);
            eventManager.publish(new ValidationEvent(errorKey, status));
        }
        let get=function(){
            return internalVal;
        }
        Object.defineProperty(target, propertyKey,{
            set:setFunc,
            get:get,
            enumerable: descriptor?descriptor.enumerable:true,
            configurable: descriptor?descriptor.configurable:true
        });
    }
}