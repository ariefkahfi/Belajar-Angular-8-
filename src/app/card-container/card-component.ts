import {Component , OnInit} from "@angular/core";
import { UserService } from "../services/user-service.service";


// <div class="card clearfix">
//     <img src="../favicon.ico" alt="tes"/>
//     <p id="p1">Nama : Test nama</p>
//     <p id="p2">Alamat : Test Alamat</p>
// </div>

@Component({
    selector : 'card-component',
    template : `
    <div id="card-container"> 
        <div class="card clearfix" *ngFor = "let u of userService.array; let i=index;">
            <img src="../favicon.ico" alt="tes"/>
            <p id="p1">Nama : {{u.nama}}</p>
            <p id="p2">Alamat : {{u.alamat}}</p>
            <button style="float : right; margin-top : 5px; margin-right : 5px; margin-bottom : 5px; display : inline;" (click) = "delete(i)">Delete</button>
        </div>
    </div>
    `
})
export class CardComponent implements OnInit{
    
    constructor(private userService : UserService){
     
    }
    
    ngOnInit(): void {     
        this.userService.array = new Array;
        console.log('after onInit array on CardComponent');
    }
    
    delete(index : number){
        this.userService.deleteUser(index);
    }
}