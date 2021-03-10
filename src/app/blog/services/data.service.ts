import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Blogs } from '../components/blogs';
import { Prueba } from '../components/prueba';
import { Coments } from '../components/coments';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  Api_Url = "http://127.0.0.1:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }


  //funcion para traer datos
  getData() {
    return this.httpClient.get(`http://127.0.0.1:8000/api/blogs`).
    pipe(
      map((data: Blogs) => {
        return data;

      }), catchError( error => {
        return throwError('Error');
      })
    )
  }
  
  createBlogs(blog: Blogs[]){
    return this.httpClient.post(`http://127.0.0.1:8000/api/blogs`, blog).
    pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError('Error');
      })
    )
  }

  insertData(data: Prueba){
    return this.httpClient.post('http://127.0.0.1:8000/api/blogs',data);
  }
  //datos de comentarios
  getData2() {
    return this.httpClient.get(`http://127.0.0.1:8000/api/comments`).
    pipe(
      map((data: Coments) => {
        return data;

      }), catchError( error => {
        return throwError('Error');
      })
    )
  }
  

  



}
