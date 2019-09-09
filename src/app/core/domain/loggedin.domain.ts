export class LoggedInDomain {
    constructor(access_token: string, email: string) {
        this.access_token = access_token;      
        this.email = email;      
    }
    public id: string;
    public access_token: string;    
    public email: string;   
}