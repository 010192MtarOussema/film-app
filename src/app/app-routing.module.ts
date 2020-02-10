import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddFilmComponent } from './add-film/add-film.component';
import { FilmListComponent } from './film-list/film-list.component';
import { EditFilmComponent } from './edit-film/edit-film.component';

const routes: Routes = [
  { path: '', redirectTo: '/register-book', pathMatch: 'full' },
  { path: 'register-book', component: AddFilmComponent },
  { path: 'view-books', component: FilmListComponent },
  { path: 'edit-book/:id', component: EditFilmComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
