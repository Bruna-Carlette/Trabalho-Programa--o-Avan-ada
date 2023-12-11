import { Component } from '@angular/core';

@Component({
    selector: 'app-logout',
    template: `
        <div class="col-10">
            <button class="btn btn-danger" (click)="onLogout()">LOGOUT</button>
        </div>
    `
})

export class LogoutComponent{
    onLogout(){

    }
}