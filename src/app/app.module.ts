import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { EditFilmComponent } from './edit-film/edit-film.component';
import { FilmListComponent } from './film-list/film-list.component';
// Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddFilmComponent,
    EditFilmComponent,
    FilmListComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig), // Main Angular fire module 
    AngularFireDatabaseModule,  // Firebase database module 
    BrowserModule,
    ReactiveFormsModule ,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
