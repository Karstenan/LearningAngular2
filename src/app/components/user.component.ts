import { Component } from '@angular/core';
import {JsonService} from '../services/json.service';
// Comment, last commit before refactoring app into html files.
@Component({
    moduleId: module.id, //For using relative paths
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [JsonService]
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

        // Gets json results
        this.jsonService.getJson().subscribe(jsons => {
            // console.log(jsons);
            this.jsons = jsons;
        })
    }

    toggleHobbies(){
        // console.log('show');
        this.showHobbies = !this.showHobbies;
    }

    addHobby(hobby: any){
        console.log(hobby);
        this.hobbies.push(hobby);
    }

    deleteHobby(i: any){
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