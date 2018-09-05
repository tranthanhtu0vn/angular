export class UserService{
    protected users:Array<any>=[];
    constructor(){
        this.users=[
            {id:1, firstName:"TU UserService", lastName:"Tran", userName:"tu.tran"},
            {id:2, firstName:"TU1", lastName:"Tran", userName:"tu.tran1"}
        ];
    }
    public getUsers():Array<any>{
        return this.users;
    }

    public getUser(userId: string):any{
        throw "exception";
    }

    public save(user: any):void{
        throw "exception";
    }

}