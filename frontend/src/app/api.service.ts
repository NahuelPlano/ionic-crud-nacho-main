import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;

  constructor(
    public http: HttpClient
) {
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type','application/json');
    this.headers.append('Access-Control-Allow-Origin','*');
   }

    addStudent(data){
    return this.http.post('http://localhost/ionic-crud-nacho-main/backend/create.php',data);
  }
   
  getStudents(){
    return this.http.get('http://localhost/ionic-crud-nacho-main/backend/getStudents.php');

  }

  deleteStudent(id){
    return this.http.delete('http://localhost/ionic-crud-nacho-main/backend/delete.php?id='+id);
  }

  getStudent(id){
    return this.http.get('http://localhost/ionic-crud-nacho-main/backend/getSingleStudent.php?id='+id);
  }

}
 
  