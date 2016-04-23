import {Component } from 'angular2/core';
import {OptionItem } from './option-item/option-item';

@Component({
    selector: 'app',
    templateUrl: 'app/app.html',
    directives: [OptionItem]
})
export class AppComponent {

    title: string;

    constructor() {
        this.title = 'Component-Demo';
    }

    change(event) {
        console.log('change!');
        console.log(event);
    }

}