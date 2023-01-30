import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { RegisterComponent } from "./register.component";
import { SignInComponent } from "./sign-in.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,        
        FormsModule,
        ReactiveFormsModule,
        SharedModule, 
        CoreModule,   ],
    exports: [ ],
    declarations: [ RegisterComponent,SignInComponent ],
    providers: [  ],
})
export class UserModule {};