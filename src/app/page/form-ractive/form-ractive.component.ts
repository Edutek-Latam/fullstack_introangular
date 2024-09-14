import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-ractive',
  templateUrl: './form-ractive.component.html',
  styleUrl: './form-ractive.component.scss'
})
export class FormRactiveComponent implements OnInit {

  frmUser : FormGroup;
  isSubmited: boolean
  constructor(){
    this.isSubmited = false;
    this.frmUser = new FormGroup({
      primerNombre: new FormControl('',[Validators.required, ]),
      segundoNombre: new FormControl('',[Validators.required,]),
      correo: new FormControl('',[Validators.required, Validators.email])
    })
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  enviar(){
    if(this.isSubmited) return;

    this.isSubmited = true;
    if(this.frmUser.valid){
      console.log(this.frmUser)
      this.isSubmited = false
    }

    this.isSubmited = false
  }

}
