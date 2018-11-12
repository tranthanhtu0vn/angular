export interface IConnector{
    get(uri:string):Promise<any>;
    put(uri:string, data: any):Promise<any>;
    post(uri:string, data: any):Promise<any>;
}