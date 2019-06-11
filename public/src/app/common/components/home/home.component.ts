import { Component, OnInit } from '@angular/core';
import { newMuscle } from '../../models/createMuscle';
import { MuscleError } from '../../models/muscleError';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Muscle } from '../../models/Muscle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newMuscle: newMuscle = {
    name: '',
    origin: '',
    insertion: '',
    nerveSupply: '',
    action: '',
    region: '',
    compartment: '',
  }

  MuscleError: MuscleError = {
    name: '',
    origin: '',
    insertion: '',
    nerveSupply: '',
    action: '',
    region: '',
    compartment: '',
  }

  allMuscle: Muscle[] = [];

  constructor(
    private router: Router,
    private http: HttpService
  ) { }

  ngOnInit() {
    this.http.getMuscles()
      .subscribe((data: Muscle[]) =>
        this.allMuscle = data
      )
  }

  onCreate() {

    //! DEFAULTED region to Pectoral for ease of data-entry

    this.newMuscle.region = 'Pectoral';
    this.http.addMuscle(this.newMuscle)
      .subscribe(data => {
        this.MuscleError = {
          name: '',
          origin: '',
          insertion: '',
          nerveSupply: '',
          action: '',
          region: '',
          compartment: '',
        };

        //* IF No Errors
        if (!data['errors']) {
          this.router.navigateByUrl('/');
        } else {
          //* ELSE Display Errors
          for (let k in data['errors']) {
            this.MuscleError[k] = data['errors'][k]['message'];
          }
        }

      });
  }

}
