import {required}  from "../share/decorators/required";
export class AddOrUpdateUserModel{
    public firstName:string;
    public lastName:string;
    @required("security.addOrUpdateUser.userNameAsInvalid")
    public userName: string;

    public import(data: any):void{
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.userName=data.userName;
    }
}