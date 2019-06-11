import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Muscle } from '../../models/Muscle';
import { newMuscle } from '../../models/createMuscle';
import { MuscleError } from '../../models/muscleError';

@Component({
  selector: 'app-edit-muscle',
  templateUrl: './edit-muscle.component.html',
  styleUrls: ['./edit-muscle.component.css']
})
export class EditMuscleComponent implements OnInit {

  thisMuscle: Muscle = {
    _id: '',
    name: '',
    origin: '',
    insertion: '',
    nerveSupply: '',
    action: '',
    region: '',
    compartment: '',
  }

  editMuscle: newMuscle =
    {
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
    private http: HttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadMuscle();
    this.loadPrepopulatedFields();
  }


  loadMuscle() {
    this.route.params.subscribe((params: Params) => {
      this.http.getMuscle(params.id)
        .subscribe((data: Muscle) => this.thisMuscle = data);
    });
  }

  loadPrepopulatedFields() {
    this.route.params.subscribe((params: Params) => {
      this.http.getMuscle(params.id)
        .subscribe((data: Muscle) => this.editMuscle = data);
    });
  }

  onEdit() {

    this.http.updateMuscle(this.thisMuscle._id, this.editMuscle)
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
          this.router.navigateByUrl('/');
        } else {
          for (let k in data['errors']) {
            this.MuscleError[k] = data['errors'][k]['message'];
          }
        }

      });
  }

}
