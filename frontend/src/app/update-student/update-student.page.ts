import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getHeapStatistics } from 'v8';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {
   
  id:any;
  year:any;
  studentOne:any;
  studentTwo:any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService
  ) { 
    this.route.params.subscribe((param:any) => {
      this.id = param.id;
      console.log(this.id);
      this.getStudent(this.id);
    })
  }

  ngOnInit() {
  }

    getStudent(id){
        this._apiService.getStudent(id).subscribe((res:any) => {
        console.log("SUCCESS",res);
        let student = res[0];
        this.year = student.year;
        this.studentOne = student.studentOne;
        this.studentTwo = student.studentTwo;
    },(err:any) =>{
         console.log("ERROR",err)
    })
  }
}
