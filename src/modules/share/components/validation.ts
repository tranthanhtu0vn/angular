import { Directive, OnInit,Input, ElementRef } from "@angular/core";
import { IEventManager } from "../event/ieventManager";
import { ValidationEvent } from "../event/validationEvent";
import { IoCNames, ValidationStatus } from "../models/enum";

@Directive({
    selector:"[validation]"
})
export class Validation implements OnInit{
    private static INVALID_CLASS="validation_failed";
    private errorKeys:Array<string>=[];
    @Input("validation") set keys(keys:Array<string>){
        this.errorKeys=keys;
    }
    private dom: any;
    constructor(element: ElementRef){
        this.dom= element.nativeElement;
        console.log(this.dom);
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
        if(ev.status==ValidationStatus.Passed){
            this.dom.classList.remove(Validation.INVALID_CLASS);

        }
        if(ev.status==ValidationStatus.Failed){
            this.dom.classList.add(Validation.INVALID_CLASS);
        }
    }

}