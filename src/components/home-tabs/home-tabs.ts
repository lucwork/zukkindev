import {Component} from '@angular/core';

/**
 * Generated class for the HomeTabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'app-home-tabs',
    templateUrl: 'home-tabs.html'
})
export class HomeTabsComponent {

    tab: string = 'tab1';

    constructor() {}

    alterarTab(string: string) {
        this.tab = string;
    }
}
