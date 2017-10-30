import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import {FormComponent} from "./form-component/form-component";
import { CardComponent } from './card-container/card-component';
import { UserService } from './services/user-service.service';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
