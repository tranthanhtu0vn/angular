import {IIoCRegistration}  from "../modules/share/ioc/iiocRegistration";
import { IoCNames } from "../modules/share/models/enum";
import { RESTConnector } from "../modules/share/providers/connector/restConnector";
import { IoCLifeCycle } from "../modules/share/ioc/enum";
import {EventManager} from "../modules/share/event/eventManager";
let iocRegistrations:Array<IIoCRegistration>=[
    {name:IoCNames.IConnector, instance: RESTConnector, lifecycle: IoCLifeCycle.Singletone},
    {name:IoCNames.IEventManager, instance: EventManager, lifecycle: IoCLifeCycle.Singletone}
];
export default iocRegistrations; 