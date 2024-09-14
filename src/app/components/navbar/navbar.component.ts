import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 @Input() text : string =''
 constructor(){
  //this.text = this.text? this.text:'titulo'
 }
}
