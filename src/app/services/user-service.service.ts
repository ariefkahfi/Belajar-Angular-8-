import {Injectable} from "@angular/core";


@Injectable()
export class UserService{
    
    private list : Array<any>;
    

    set array(list : Array<any>){
        this.list = list;
    }
    get array(){
        return this.list;
    }

    
    addUser(user : {nama : string , alamat : string}){
        this.array.push(user);
    }


    listUser(){
        this.array.forEach((val,index)=>{
            console.log(val);
        });
    }
    deleteUser(index : number){
        this.array.splice(index,1);
    }
}