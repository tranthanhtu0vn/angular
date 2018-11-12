import { IIoCRegistrationFactory } from "./iiocRegistrationFactory";
import { IIoCRegistration } from "./iiocRegistration";

export class IoCSingletonRegistrationFactory implements IIoCRegistrationFactory{
    private item: IIoCRegistration;
    constructor(item: IIoCRegistration){
        this.item=item;
    }
    public create():any{
        console.log("create of IoCSingletonRegistrationFactory");
        if(!this.item.instanceObj){
            this.item.instanceObj=new this.item.instance();
        }
        return this.item.instanceObj;
    }
}