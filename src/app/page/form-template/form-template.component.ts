import { trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.scss',
})
export class FormTemplateComponent {
  primerNombre: string =''
  segundoNombre: string=''
  correo: string =''
 
  isSubmited : boolean = false
  
  enviar(){
    console.log('inicio', this.isSubmited)
    if(this.isSubmited) return;

    this.isSubmited = true

    setTimeout(() => {
      console.log(this.primerNombre, this.segundoNombre, this.correo);
      this.isSubmited=false  
    }, 2000);
    
  }
}
