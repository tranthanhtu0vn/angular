import { ValidationStatus } from "../models/enum";

export class ValidationEvent{
    public key:string;
    public status: ValidationStatus;
    constructor(key:string, status: ValidationStatus){
        this.key=key;
        this.status=status;
    }
}