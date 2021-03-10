import { Component, OnInit } from '@angular/core';
import { Coments } from '../../components/coments';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coment1',
  templateUrl: './coment1.component.html',
  styleUrls: ['./coment1.component.css']
})
export class Coment1Component implements OnInit {
  comments: Coments[]=[];

  constructor(private dataService:DataService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getComentData();
  }

  getComentData(){
    this.dataService
    .getData2()
    .subscribe((data:any) => {
      console.log(data);
      this.comments = data.data;
    });
  }

}
