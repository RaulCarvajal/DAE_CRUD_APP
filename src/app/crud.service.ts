import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { template } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<resA>("http://127.0.0.1:3000/persons/");
  }
  getbyid(id:string){
    return this.http.get<res>("http://127.0.0.1:3000/persons/"+id);
  }
  create(data:JSON){
    return this.http.post<res>("http://127.0.0.1:3000/persons/",data);
  }
  update(id:string,data:JSON){
    return this.http.put<res>("http://127.0.0.1:3000/persons/update/"+id,data);
  }
  delete(id:string){
    return this.http.delete<res>("http://127.0.0.1:3000/persons/delete/"+id);
  }
}

export interface resA{
  "code":number,
  "detail":JSON[];
}

export interface res{
  "code":number,
  "detail":any;
}