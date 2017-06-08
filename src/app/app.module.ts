import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MaterialModule,
  OverlayContainer,
  FullscreenOverlayContainer,
  MdSelectionModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PoundsComponent } from './pounds/pounds.component';
import { KilogramsComponent } from './kilograms/kilograms.component';
import { Routes, RouterModule } from '@angular/router';
import { CalculateService } from './calculate.service';

const appRoutes: Routes =[
  { path: '', component: AppComponent },
  { path: 'pounds', component: PoundsComponent },
  { path: 'kilograms', component: KilogramsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PoundsComponent,
    KilogramsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CalculateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
