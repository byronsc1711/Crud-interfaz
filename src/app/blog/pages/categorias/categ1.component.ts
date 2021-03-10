import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-categ1',
  templateUrl: './categ1.component.html',
  styleUrls: ['./categ1.component.css']
})
export class Categ1Component implements OnInit {
  blogs:any;

  constructor(private dataService:DataService) { }

  ngOnInit(){
    this.getBlogData();
  }

  getBlogData(){
    this.dataService
    .getData()
    .subscribe((data:any) => {
      console.log(data);
      this.blogs = data.data;
    });
  }
  }

