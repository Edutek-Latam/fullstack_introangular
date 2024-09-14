import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnChanges {
  title : string //= 'intro-module';
  contador : number;
  colores = ['ROJO', 'VERDE','AMARILLO','AZUL']
  constructor(){
    this.title = 'intro-module'
    this.contador = 0
    console.log('constructor')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
    //throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    //throw new Error('Method not implemented.');
  }

  inc(){
    this.contador++
  }

  dec(){
    if(this.contador >=1){
    this.contador--
    }
    return
  }
}
