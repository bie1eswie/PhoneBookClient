export class Contact{
    public name: string;
    public phoneNumber: string;
    public edit: boolean;
    public isNew: boolean;
    public phoneBookid: number;
    public constructor(name: string, phoneNumber: string,phoneBookid: number){
        this.edit = true;
        this.isNew = true;
        this.name = name;
        this.phoneNumber  = phoneNumber;
        this.phoneBookid = phoneBookid;
    }
}
