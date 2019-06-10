import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/components/home/home.component';
import { HttpService } from './common/services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewMuscleComponent } from './common/components/view-muscle/view-muscle.component';
import { EditMuscleComponent } from './common/components/edit-muscle/edit-muscle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewMuscleComponent,
    EditMuscleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
