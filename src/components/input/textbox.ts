/// <reference path="../../_references.ts" />
/// <reference path="../IComponent" />


namespace AngularMetro.Components.Input{
	export interface ITextbox{
		
	}
	
	export class Textbox implements ITextbox, IComponent{
		name: string;
		public constructor(name: string){
				this.name = name;
		}
	}
}