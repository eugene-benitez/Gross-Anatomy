import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Muscle } from '../../models/Muscle';

@Component({
  selector: 'app-view-muscle',
  templateUrl: './view-muscle.component.html',
  styleUrls: ['./view-muscle.component.css']
})
export class ViewMuscleComponent implements OnInit {

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


  constructor(
    private router: Router,
    private http: HttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadMuscle();
  }

  loadMuscle() {
    this.route.params.subscribe((params: Params) => {
      this.http.getMuscle(params.id)
        .subscribe((data: Muscle) => this.thisMuscle = data);
    });
  }

}
