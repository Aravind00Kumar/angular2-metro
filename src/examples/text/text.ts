/// <reference path="../../_references" />

import {Component, View, FORM_DIRECTIVES} from "angular2/angular2";

import { Text } from 'components/input/text/text';

@Component({
	selector: 'div'
})

@View({
	templateUrl: "./examples/text/text.html",
	directives:[Text, FORM_DIRECTIVES]
})

export class TextExample {
	value:string;
	type:string;
	message: string;
	constructor(){
		this.value = "Aravind";
		this.type = "password";
		this.message = "Hello!";
	}	
}
