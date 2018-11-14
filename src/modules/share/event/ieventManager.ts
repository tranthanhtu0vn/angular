import {ValidationEvent}  from "./validationEvent";
export interface IEventManager{
    publish(ev: ValidationEvent):void;
    subscribe(key:string, handler:(ev: ValidationEvent)=>void): void;
}