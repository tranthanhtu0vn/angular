import { IIoCRegistration } from "./iiocRegistration";
import {IoCContainer} from "./iocContainer";
import { Injector } from "@angular/core";

let helper={
    initialize: initialize
};
export default helper;
function initialize(items: Array<IIoCRegistration>, injector: Injector){
    let container: IoCContainer = new IoCContainer(injector);
    container.import(items);
    window.ioc=container;
}