import { UserService } from "./userService";
import {ArrayHelper} from "./arrayHelper";
const LocalStorageConst={
    USERS:"USERS"
};
export class LocalUserService extends UserService {
    public getUsers():Array<any>{
        let json = window.localStorage.getItem(LocalStorageConst.USERS);
        return !!json?JSON.parse(json):[];
    }

    public getUser(userId:string):any{
        let users:Array<any>=this.getUsers();
        return ArrayHelper.firstOrDefault(users, (userItem: any)=>{ return userItem.id==userId;});
    }

    public save(user: any):void{
        let users:Array<any>=this.getUsers();
        let currUserItem =  ArrayHelper.firstOrDefault(users, (userItem: any)=>{ return userItem.id==user.id;});
        currUserItem.firstName=user.firstName;
        currUserItem.lastName=user.lastName;
        this.persist(users);
    }
    private persist(users:Array<any>):void{
        let json:string =!!users?JSON.stringify(users):"[]";
        window.localStorage.setItem(LocalStorageConst.USERS, json);
    }
}