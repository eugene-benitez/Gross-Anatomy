import { Component, OnInit } from '@angular/core';
import { newMuscle } from '../../models/createMuscle';
import { MuscleError } from '../../models/muscleError';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

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

  constructor(
    private router: Router,
    private http: HttpService
  ) { }

  ngOnInit() {
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

        if (!data['errors']) {
          this.router.navigateByUrl('');
        } else {
          for (let k in data['errors']) {
            this.MuscleError[k] = data['errors'][k]['message'];
          }
        }


      });

  }

}
