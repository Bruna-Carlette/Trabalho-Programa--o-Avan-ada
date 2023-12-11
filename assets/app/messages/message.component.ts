import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.services";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [ `
    .author{
        display: inline-block;
        font-style: italic;
        font-size: 12px;
        width: 80%;
    }
    .config{
        display: inlice-block;
        text-align: right;
        font-size: 12px;
        width: 19%;
    }
`]
})
export class MessageComponent{
    color = 'pink';
    tam = 12;
    onMudaStyle(){
        this.color = 'green';
        this.tam = 18;
    }

    @Output() editClicked_MessageMetodoClasse = new EventEmitter<string>();
    @Output('outputMessage') editClicked_MessageMetodoClasseTeste = new EventEmitter<string>();

    onEdit(){
        this.editClicked_MessageMetodoClasse.emit("Texto veio do filho p pai)");
    }

    @Input() messageVarClasse : Message = new Message("", "");
    @Input('inputMessage') messageVarClasseTeste : Message = new Message("", "");

    constructor(private messageServiceObj: MessageService){ }
    onDelete(){
        this.messageServiceObj.deleteMessage(this.messageVarClasse);
    }
}