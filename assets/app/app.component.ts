import { Component } from '@angular/core'; 
import { UserService } from './auth/signup.services';
import { Message } from './messages/message.model';
import { MessageService } from './messages/message.services';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService, UserService]
})
export class AppComponent {
    messageBinding: Message = new Message("Novo texto para alterar a lógica","BrunaCarlette");
}