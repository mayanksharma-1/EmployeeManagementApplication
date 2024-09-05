import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { IDesignation } from '../../model/interface/designation';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  http = inject(HttpClient);
  designationList:IDesignation[]=[];
  ngOnInit(): void {
      this.getAllDesignations();
  }
  getAllDesignations(){
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation")
    .subscribe((res:any)=>{
      this.designationList = res.data;
    })
  }


}
