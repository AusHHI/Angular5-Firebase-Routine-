import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class TodoService {
  toDoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getToDoList() {
    this.toDoList = this.firebasedb.list('titles');
    return this.toDoList;
  }
  addTitle(title: string,date : Date) {
    this.toDoList.push({
      title: title,
      date : Date,
      isChecked: false
    });
  }
  checkOrUncheckTitle($key: string,flag: boolean){
    this.toDoList.update($key,{isChecked :flag});
  }
  removeTitle($key: string) {
    this.toDoList.remove($key);
  }
  formatDate(date: Date): string{
   const day= date.getDate();
    const month= date.getMonth() + 1;
   const year= date.getFullYear();

    return '${year}-${month}-${day}' ;
  }
  getTimeStamp() {
      const now = new Date();
      const date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCDate();
    //  const time = now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds();

      //return (date + ' ' + time);
          return '${year}-${month}-${day}' ;
  }

}
