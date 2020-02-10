import { Injectable } from '@angular/core';
import { Film } from './film';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  studentsRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  studentRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too
  
  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create Student
  AddBook(book: Film) {
    this.studentsRef.push({
      bookName: book.bookName,
      picture: book.picture,
     
    })
  }

  // Fetch Single Student Object
  GetStudent(id: string) {
    this.studentRef = this.db.object('books-list/' + id);
    return this.studentRef;
  }

  // Fetch Students List
  GetStudentsList() {
    this.studentsRef = this.db.list('books-list');
    return this.studentsRef;
  }  

  // Update Student Object
  UpdateStudent(book: Book) {
    this.studentRef.update({
      bookName: book.bookName,
      picture: book.picture,
     
    })
  }  

  // Delete Student Object
  DeleteStudent(id: string) { 
    this.studentRef = this.db.object('books-list/'+id);
    this.studentRef.remove();
  }
}
