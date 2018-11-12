import {IIoCRegistration}  from "../modules/share/ioc/iiocRegistration";
import { IoCNames } from "../modules/share/models/enum";
import { RESTConnector } from "../modules/share/providers/connector/restConnector";
import { IoCLifeCycle } from "../modules/share/ioc/enum";
let iocRegistrations:Array<IIoCRegistration>=[
    {name:IoCNames.IConnector, instance: RESTConnector, lifecycle: IoCLifeCycle.Transient}
];
export default iocRegistrations; 