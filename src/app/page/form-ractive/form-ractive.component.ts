import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-ractive',
  templateUrl: './form-ractive.component.html',
  styleUrl: './form-ractive.component.scss'
})
export class FormRactiveComponent implements OnInit {

  frmUser : FormGroup;
  isSubmited: boolean

  generoValue = [
    {index:'M', texto:'Masculino'},
    {index:'F', texto:'Femenino'}
  ]
  //frmuser2;
  constructor(private _fb: FormBuilder, 
    private _dataservice: DataService,
    private _router: Router
  ){
    this.isSubmited = false;
    /* 
    this.frmuser2 = this._fb.group({
      primerNombre: ['',[Validators.required, Validators.minLength(3)]],
      segundoNombre:['Gonzalez',[Validators.required, Validators.minLength(3)]],
      correo:['',[Validators.required,Validators.email]]
    }) */
   this.frmUser = new FormGroup({
      primerNombre: new FormControl('',[Validators.required, ]),
      segundoNombre: new FormControl('',[Validators.required,]),
      correo: new FormControl('',[Validators.required, Validators.email]),
      genero: new FormControl('M',[Validators.required])
    }) 
  }

  ngOnInit(): void {
    setTimeout(() => {
        //this.frmUser.controls['primerNombre'].value('Sherwin')
        //this.frmUser.setValue({primerNombre:'Sherwin',segundoNombre:'Gonzalez',correo:'paintsis@gmail.com'})
        this.frmUser.patchValue({primerNombre:'Sherwin'})
    }, 5000);
    //throw new Error('Method not implemented.');
  }

  getError(campo: string){
    const control = this.frmUser.controls[campo]
    console.log(control.errors)
    //console.log(typeof this.frmuser2)
    return false
  }

  getNombre(){
    console.log(this.frmUser.controls['primerNombre'].value)
  }
  enviar(){
    console.log(this.frmUser.value)
    //console.log(typeof this.frmUser)

    if(this.isSubmited) return;

    this.isSubmited = true;
    if(this.frmUser.valid){
      //console.log(this.frmUser)
      this._dataservice.user = this.frmUser.value
      this.isSubmited = false
      this._router.navigate(['ver'])
    }

    this.isSubmited = false
  }

}
