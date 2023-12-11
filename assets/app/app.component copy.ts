import { Component } from '@angular/core';
import { Message } from './messages/message.model';
import { MessageService } from './messages/message.services';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService]

})
export class AppComponent {

    nomeNgSwitch: string = "";

    valorNgSwitch: number;

    mostrarElemento: boolean = true;
    onMudaMostrarElemento() {
        this.mostrarElemento = !this.mostrarElemento;
    }

    messageS: Message[] = [
        new Message("Texto da mensagem", "BrunaCarlette"),
        new Message("Texto 2 da mensagem", "CarletteBruna"),
        new Message("Texto 3 da mensagem", "CarletteCarlette"),
    ];

    messageBinding: Message = new Message("Texto da Mensagem", "BrunaCarlette");
    messageBindingTeste: Message = new Message("Texto da Mensagem Teste", "BrunaCarletteTeste");

}

