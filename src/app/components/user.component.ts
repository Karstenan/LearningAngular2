import { Component } from '@angular/core';
import {JsonService} from '../services/json.service';
// Comment, last commit before refactoring app into html files.
@Component({
    moduleId: module.id, //For using relative paths
    selector: 'user',
    template: `
    <h1>Hello {{name}}</h1>
    <p><Strong>Email:</Strong> {{email}}</p>
    <p><Strong>Address:</Strong>{{address.street}} {{address.city}}, {{address.state}}</p>
    <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
    <div *ngIf="showHobbies">
        <h3>Hobbies</h3>
            <ul>
                <li *ngFor="let hobby of hobbies; let i = index">
                    {{hobby}} <button (click)="deleteHobby()">X</button>
                </li>
            </ul>
            <form (submit)="addHobby(hobby.value)">
                <label>Add Hobby: </label><br />
                <input type="text" #hobby /><br />
            </form>
    </div>
    <hr />
    <h3>Edit User</h3>
    <form>
        <label>Name: </label><br />
        <input type="text" name="name" [(ngModel)]="name" /><br />
        <label>Email: </label><br />
        <input type="text" name="email" [(ngModel)]="name" /><br />
        <label>Street: </label><br />
        <input type="text" name="address.street" [(ngModel)]="address.street" /><br />
        <label>City: </label><br />
        <input type="text" name="address.city" [(ngModel)]="address.city" /><br />
        <label>State: </label><br />
        <input type="text" name="address.state" [(ngModel)]="address.state" /><br />
    </form>
    <hr />
    <h3>Jsons</h3>
    <div *ngFor="let json of jsons">
        <h3>{{json.title}}</h3>
        <p>{{json.body}}</p>
    `,
    templateUrl: 'user.component.html',
    providers: [JsonService]
    // styles: ['div {width: 400px;  margin: 0px auto;}']
})
export class UserComponent  {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    jsons: Json[];
    
    
    constructor(private jsonService: JsonService) {
        console.log()
        //    this.name = 
        this.name = 'Karsten Doe';
        this.email = 'karsten@gmail.com',
        this.address = {
            street: '12 Main awesomestreet',
            city: 'Boston',
            state: 'Noreg'
        }
        this.hobbies = ['Tea', 'Movies', 'Gaming'];
        this.showHobbies = false;

        this.jsonService.getJson().subscribe(jsons => {
            // console.log(jsons);
            this.jsons = jsons;
        })
    }

    toggleHobbies(){
        // console.log('show');
        this.showHobbies = !this.showHobbies;
    }

    addHobby(hobby){
        console.log(hobby);
        this.hobbies.push(hobby);
    }

    deleteHobby(i){
        this.hobbies.splice(i, 1);
    }

}


interface address {
    street: string;
    city: string;
    state: string;
}

interface Json {
    id: number;
    title: string;
    body: string;
}