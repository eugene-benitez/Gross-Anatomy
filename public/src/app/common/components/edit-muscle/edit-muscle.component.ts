import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-edit-muscle',
  templateUrl: './edit-muscle.component.html',
  styleUrls: ['./edit-muscle.component.css']
})
export class EditMuscleComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpService
  ) { }

  ngOnInit() {
  }

}
