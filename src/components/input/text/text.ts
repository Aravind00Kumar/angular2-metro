import {Component, View, FORM_DIRECTIVES} from "angular2/angular2";


@Component({
	selector: 'am-text',
	properties: [
		'type', // type=[text|password|texticon]
		'value' // value={string}
	]  
	
	//events:[]
})

@View({
	templateUrl: "./components/input/text/text.html",
	directives: [FORM_DIRECTIVES],
})
export class Text {
	value: string;
	type: string;
	constructor() {
		this.value = "KKK";
		this.type = this.type || 'input';
	}
}
