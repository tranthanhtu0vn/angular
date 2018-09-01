export class UserService{
    private users:Array<any>=[];
    constructor(){
        console.log("UserService:", new Date());
        this.users=[
            {firstName:"TU UserService", lastName:"Tran", userName:"tu.tran"},
            {firstName:"TU1", lastName:"Tran", userName:"tu.tran1"}
        ];
    }
    public getUsers():Array<any>{
        return this.users;
    }
}