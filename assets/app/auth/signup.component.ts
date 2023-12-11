import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { UserService } from './signup.services';
import { User } from './user.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {

    myForm: FormGroup;
    
    constructor(private userServices: UserService){};

    onSubmit(){
        
        const userAux = new User(this.myForm.value.emailTS, this.myForm.value.passwordTS, this.myForm.value.firstNameTS, this.myForm.value.lastNameTS);
        this.userServices.addUser(userAux)
        .subscribe(
            dadosSucesso => console.log(dadosSucesso),
            dadosErro => console.log(dadosErro)
            );
        console.log(this.myForm);
        // this.myForm.reset();
    }

    ngOnInit(){
        this.myForm = new FormGroup({
            firstNameTS: new FormControl(null, Validators.required),
            lastNameTS: new FormControl(null, Validators.required),
            emailTS: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
            ]),
            passwordTS: new FormControl(null, Validators.required),
        });
    }
    
}