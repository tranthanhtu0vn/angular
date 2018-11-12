import {IoCLifeCycle}  from "./enum";

export interface IIoCRegistration{
    name:string;
    instance: any;
    lifecycle: IoCLifeCycle;
}