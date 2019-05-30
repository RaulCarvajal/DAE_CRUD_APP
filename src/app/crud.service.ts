import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get("http://127.0.0.1/brands/");
  }
  create(n:JSON){
    return this.http.post("http://127.0.0.1/brands/",n);
  }
  getById(id:string){
    return this.http.get("http://127.0.0.1/brands/"+id);
  }
  delete(id:string){
    return this.http.delete("http://127.0.0.1/brands/"+id);
  }
}
