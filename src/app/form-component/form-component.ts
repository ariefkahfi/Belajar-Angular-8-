import {Component , OnInit} from "@angular/core";
import { UserService } from "../services/user-service.service";

@Component({
    selector : 'form-component',
    template : `
    <div id="left-container-form">
    <form #myForm = "ngForm">
        <table>
            
            <tr>
                <td>Nama</td>
                <td><input type="text" [(ngModel)] = "nama" name="nama"/></td>
            </tr>
          
            <tr>
                <td>Alamat</td>
                <td><input type="text" [(ngModel)] = "alamat" name="alamat"/></td>
            </tr>
          
            <tr>
                <td>
                    <button (click) = "myBio()">Submit Data</button>
                </td>
                <td>
                    <button (click) = "cekForm(myForm)">Test</button>
                </td>
            </tr>

        </table>
    </form>
  </div>
    `
})
export class FormComponent implements OnInit{
    nama : string;
    alamat : string;
    
    cekForm(formVal){
        console.log(formVal);
        console.log(
            `Status valid form : ${formVal.form.valid}`
        );
    }
    loadArray(){
        this.userService.listUser();
    }
    constructor(private userService : UserService){}
    
    ngOnInit(): void {
       console.log('onInit FormComponent');
    }
    myBio(){
        this.userService.addUser(
           {
               nama : this.nama , 
               alamat : this.alamat 
           }
        );
    }
}