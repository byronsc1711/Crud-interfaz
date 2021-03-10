import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Datos } from '../../interfaces/datos';
import { Blogs } from '../../components/blogs';
import { Prueba } from '../../components/prueba';

@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.css']
})
export class Blog1Component implements OnInit{
  blogs: Blogs[]=[];
  pruebas: any;
  prueba = new Prueba();

  constructor(private dataService:DataService, private httpClient: HttpClient ) {}

    ngOnInit(){
      this.getBlogData();
      this.getEmployData();
    }

    getBlogData(){
      this.dataService
      .getData()
      .subscribe((data:any) => {
        console.log(data);
        this.blogs = data.data;
      });
    }

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


    }

