import { IIoCRegistrationFactory } from "./iiocRegistrationFactory";
import { IIoCRegistration } from "./iiocRegistration";

export class IoCTransientRegistrationFactory implements IIoCRegistrationFactory{
    private item: IIoCRegistration;
    constructor(item: IIoCRegistration){
        this.item=item;
    }
    public create():any{
        console.log("create of IoCTransientRegistrationFactory");
        return new this.item.instance();
    }
}