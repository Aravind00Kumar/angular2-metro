/// <reference path="_references.ts" />

import { Component, View, bootstrap, bind } from "angular2/angular2";
import {ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy} from "angular2/router"
import { RouteConfig, RouterOutlet, RouterLink, Router, Location, RouteParams } from 'angular2/router';

import {UI} from 'core/ui';

import { ButtonExample } from './examples/button/button';
import { TextExample } from './examples/text/text';


@RouteConfig([
    { path: "/button", component: ButtonExample, as: 'button' },
    { path: "/text", component: TextExample, as: 'text' }
])

@Component({
    selector: 'app'
})

@View({
    directives: [RouterOutlet, RouterLink],
    template: `<h1> Hello World! Welcome {{name}}</h1>
                    <nav>
                        <ul>
                            <li> <a [router-link]="['./button']">Button</a></li>
                            <li> <a [router-link]="['./text']">Text</a></li>
                        </ul>
                    </nav>
                    <main>
                        <router-outlet></router-outlet>
                    </main>
                  `,
})

export class App {
    name: string;
    constructor() {
        this.name = "Aravind";
        new UI();
    }
    
}

// bootstrap application 
export function main() {
    bootstrap(App, [ROUTER_BINDINGS]);
}
