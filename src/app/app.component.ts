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

  regs:any[];

  getAll(){
    this.crudService.get().subscribe(
      res=>{
        this.regs=res;
      },err=>{
        console.log(err);
      }
    );
  }
  formSave(n:JSON){
    this.crudService.create(n).subscribe(
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
}
