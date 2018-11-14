import {EventEmitter} from "@angular/core";
import { IEventManager } from "./ieventManager";
import { ValidationEvent } from "./validationEvent";

export class EventManager implements IEventManager{
    private subscribers:any={};
    public publish(ev: ValidationEvent):void{
        if(!this.subscribers[ev.key]){
            console.log("subscriber for \'" + ev.key+"\' was not found.");
            return;
        }
        let subscriber: EventEmitter<ValidationEvent> = this.subscribers[ev.key];
        subscriber.emit(ev);
    }
    public subscribe(key, handler: (ev:ValidationEvent)=>void):void{
        if(!this.subscribers[key]){
            this.subscribers[key]=new EventEmitter<ValidationEvent>();
        }
        this.subscribers[key].subscribe(handler);
    }
}