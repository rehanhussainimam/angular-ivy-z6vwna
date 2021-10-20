import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubTableComponent } from './sub-table/sub-table.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, SubTableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
