import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { catchError, throwError } from 'rxjs';
import { VampireSheet, Skills, Attributes} from '../app.component'; 
import { VampireService } from '../vampire.service';


@Component({
  selector: 'app-vampire',
  templateUrl: './vampire.component.html',
  styleUrls: ['./vampire.component.scss']
})
export class VampireComponent implements OnInit {

  resultData: VampireSheet[] = [];
  option: any; 
  error : string = '';
  inputNumber!: number;
  pageIndex:number = 0;
  pageSize:number = 1;
  lowValue:number = 0;
  highValue:number = 1;
  pageEvent!: PageEvent;

  constructor(private vampireService: VampireService) { }

  ngOnInit(): void {
  }

  createRandom() {
    this.vampireService.createRandom()
    .subscribe((data) => {
      console.log(data);
      this.resultData[0]=data;
      this.option = 'random';
      console.log(this.option);
      console.log(data);    
    })
  }

  findAll() {
    this.vampireService.findAll()
    .subscribe((data) => {
      this.resultData = data;
      this.option = 'find-all';
      console.log(this.option);
      console.log(data);    
    })
  }

  findOneForm() {
    this.option = 'find-one-form'
    this.resultData = [];
    console.log(this.option);
  }

  findOne() {
    console.log('Find one method')
    this.vampireService.findById(this.inputNumber)
      .pipe (
        catchError((error) => {
          console.error('Error occured: ', error);
          this.error = 'Mortal with id '+this.inputNumber+' not found.';
          return throwError(error);
        })
      )
      .subscribe((data) => {
        this.resultData[0] = data;
        this.option = 'find-one';
        this.error = '';
        console.log(this.option);
        console.log(data);
      });
    
  }

  transformSkillsToArray(skills: Skills): { name: string; value: number }[] {
    return Object.entries(skills)
                    .filter(([name])=> name!== 'id')
                    .map(([name, value]) => ({ name, value }));
  }

  transformAttributesToArray(attributes: Attributes): { name: string; value: number }[] {
    return Object.entries(attributes)
                  .filter(([name])=> name!== 'id')
                  .map(([name, value]) => ({ name, value }));
  }

  getPaginatorData(event: { pageIndex: number; }){
    console.log(event);
    if(event.pageIndex === this.pageIndex + 1){
       this.lowValue = this.lowValue + this.pageSize;
       this.highValue =  this.highValue + this.pageSize;
      }
   else if(event.pageIndex === this.pageIndex - 1){
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue =  this.highValue - this.pageSize;
     }   
      this.pageIndex = event.pageIndex;
  }
}
