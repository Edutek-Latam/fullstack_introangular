import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { IUser } from '../../common/intefaces/usuario.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrl: './ver.component.scss'
})
export class VerComponent {
  user: IUser
  constructor( private _dataService: DataService, private _router: Router ){

    this.user = this._dataService.user
    console.log(this.user)
    if(this.user ||  this.user === undefined ) this._router.navigate(['form-reactive'])
  }
}
