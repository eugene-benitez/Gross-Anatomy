import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getMuscles = () => this._http.get('/api/muscles');

  getMuscle = (id: string) => this._http.get('api/muscles/' + id);

  addMuscle = (data) => this._http.post('api/muscles/', data);

  updateMuscle = (id: string, data) => this._http.put('api/muscles/' + id, data);

  deleteMuscle = (id: string) => this._http.delete('api/muscles/' + id);


  //! One to many:


  increaseLike = (MuscleID: string) => this._http.get('/api/increaseLikes/' + MuscleID);

  decreaseLike = (MuscleID: string) => this._http.get('/api/decreaseLikes/' + MuscleID);


}

