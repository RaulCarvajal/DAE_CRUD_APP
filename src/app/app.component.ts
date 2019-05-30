import { Component } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private crudService:CrudService){
    this.getAll();
  }

  regs:JSON[];
  name:string;
  lastname:string;
  email:string;
  control:string;

  pupd:person;

  flag:boolean=true;

  idupd:string="";

  getAll(){
    this.crudService.get().subscribe(
      res=>{
        this.regs=res.detail;
      },err=>{
        console.log(err);
      }
    );
  }
  formSave(){
    let np:any={
      'name':this.name,
      'lastname':this.lastname,
      'email':this.email,
      'nc':this.control
    };
    this.crudService.create(np).subscribe(
      res=>{
        this.getAll();
      },err=>{
        console.log(err);
      }
    );
  }
  del(id:string){
    this.crudService.delete(id).subscribe(
      res=>{
        this.getAll();
      },err=>{
        console.log(err);
      }
    );
  }
  load(id:string){
    this.crudService.getbyid(id).subscribe(
      res=>{
        this.pupd=res.detail;
        this.idupd=this.pupd._id;
        this.name=this.pupd.name;
        this.lastname=this.pupd.lastname;
        this.control=this.pupd.nc;
        this.email=this.pupd.email;
        this.flag=true;
      },err=>{
        console.log(err);
      }
    );
  }
  upd(){
    let np:any={
      'name':this.name,
      'lastname':this.lastname,
      'email':this.email,
      'nc':this.control
    };
    this.crudService.update(this.idupd,np).subscribe(
      res=>{
        this.getAll();
        this.flag=false;
      },err=>{
        console.log(err);
      }
    );
  }
}

export interface person{
  "_id":string,
  "name":string,
  "lastname":string,
  "nc":string,
  "email":string
}