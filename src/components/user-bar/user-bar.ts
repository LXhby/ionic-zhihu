import { Component } from '@angular/core';

/**
 * Generated class for the UserBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-bar',
  templateUrl: 'user-bar.html'
})
export class UserBarComponent {

  text: string;

  constructor() {
    console.log('Hello UserBarComponent Component');
    this.text = 'Hello World';
  }

}
