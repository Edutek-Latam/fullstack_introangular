import { Injectable } from '@angular/core';
import { IUser } from './common/intefaces/usuario.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _user!: IUser
  constructor() { }

  set user(usuario: IUser){
    this._user = usuario
    console.log(this._user)
  }

  get user(){
    return this._user
  }

}
