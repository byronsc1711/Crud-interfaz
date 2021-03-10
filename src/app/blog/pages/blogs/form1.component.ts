import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Blogs } from '../../components/blogs';
import { Prueba } from '../../components/prueba';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit{
  blogs: Blogs[]=[];
  pruebas: any;
  prueba = new Prueba;
  blog: any = {};

  constructor(private dataService:DataService) { }

  ngOnInit():void {
    this.getEmployData();
  }

  //
  getEmployData(){
    this.dataService.getData().subscribe(res =>{
      this.pruebas = res;
    });
  }

  insertData() {
    this.dataService.insertData(this.prueba).subscribe(res =>{
      this.getEmployData();
    })
  }
  //
  createData(){
    this.dataService.createBlogs(this.blog).subscribe((res) => {

    });
  }

}
