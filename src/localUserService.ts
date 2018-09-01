import { UserService } from "./userService";

const LocalStorageConst={
    USERS:"USERS"
};
export class LocalUserService extends UserService {
    public getUsers():Array<any>{
        let json = window.localStorage.getItem(LocalStorageConst.USERS);
        return !!json?JSON.parse(json):[];
    }
}