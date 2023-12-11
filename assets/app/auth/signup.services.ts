import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { User } from "./user.model";
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class UserService{
    
    private userSService: User;

    constructor(private http: Http){}

    addUser(user: User){
        const bodyReq = JSON.stringify(user);
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/autenticacao/autenticacao', bodyReq, {headers: myHeaders})
        .map((responseRecebida: Response) => responseRecebida.json())
        .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

    getUser(){
        return this.http.get('http://localhost:3000/autenticacao/autenticacao')
        .map((responseRecebida: Response) => {
            const responseEmJSON = responseRecebida.json();
            const messageSResponseRecebida = responseEmJSON.objMessageSRecuperadoS;
            let transformedCastUser: User;
            this.userSService = transformedCastUser;
            return transformedCastUser;
        })
        .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json())); 
        ;
    }

    deleteMessage(user: User){
        // this.messageSService.splice(this.messageSService.indexOf(message), 1);
        this.userSService;
        console.log(this.userSService);

        const bodyReq = JSON.stringify(user);
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.delete('http://localhost:3000/autenticacao/autenticacao', bodyReq)
        .map((responseRecebida: Response) => responseRecebida.json())
        .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

}