import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from './message.services';
import { Message } from './message.model';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    
})

export class MessageInputComponent{

    constructor(private messageService: MessageService){}


    onSubmit(form: NgForm){
        const mensagem = form.value.myContentngForm;
        this.messageService.addMessage(mensagem)
        .subscribe(
            dadosSucesso => console.log(dadosSucesso),
            dadosErro => console.log(dadosErro)
            );
        
        console.log(form);
        form.resetForm();
    }

};