import { Directive, OnInit,Input } from "@angular/core";
import { IEventManager } from "../event/ieventManager";
import { ValidationEvent } from "../event/validationEvent";
import { IoCNames } from "../models/enum";

@Directive({
    selector:"[validation]"
})
export class Validation implements OnInit{
    private errorKeys:Array<string>=[];
    @Input("validation") set keys(keys:Array<string>){
        this.errorKeys=keys;
    }

    public ngOnInit(){
        if(!this.errorKeys || this.errorKeys.length<=0){return;}
        let eventManager:IEventManager = window.ioc.resolve(IoCNames.IEventManager);
        let self=this;
        this.errorKeys.forEach((key:string)=>{
            eventManager.subscribe(key, (ev: ValidationEvent)=>{
                self.onValidationEventRaised(ev);
            });            
        });
    }
    private onValidationEventRaised(ev: ValidationEvent){
        console.log(ev);
    }

}