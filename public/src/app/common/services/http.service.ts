import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getMuscles = () => this._http.get('/api/objects');

  getMuscle = (id: string) => this._http.get('api/objects/' + id);

  addMuscle = (data) => this._http.post('api/objects/', data);

  updateMuscle = (id: string, data) => this._http.put('api/objects/' + id, data);

  deleteMuscle = (id: string) => this._http.delete('api/objects/' + id);


  //! One to many:


  increaseLike = (MuscleID: string) => this._http.get('/api/increaseLikes/' + MuscleID);

  decreaseLike = (MuscleID: string) => this._http.get('/api/decreaseLikes/' + MuscleID);


}

