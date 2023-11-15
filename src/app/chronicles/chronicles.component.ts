// chronicles.component.ts
import { Component, OnInit} from '@angular/core';
import { MortalService } from '../chronicles.service';
import { MortalSheet} from '../app.component'; 
import { PageEvent } from '@angular/material/paginator';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-chronicles',
  templateUrl: './chronicles.component.html',
  styleUrls: ['./chronicles.component.scss'],
})

export class ChroniclesComponent implements OnInit {
  resultData: MortalSheet[] = [];
  option: any; 
  error : string = '';
  inputNumber!: number;
  pageIndex:number = 0;
  pageSize:number = 1;
  lowValue:number = 0;
  highValue:number = 1;
  pageEvent!: PageEvent;

  constructor(private chroniclesService: MortalService) {}

  ngOnInit() {
  }

  randomMortal() {
    this.chroniclesService.createRandomMortal()
    .subscribe((data) => {
      console.log(data);
      this.resultData[0]=data;
      this.option = 'random';
      console.log(this.option);
      console.log(data);    
    })
  }

  findAll() {
    this.chroniclesService.getAllMortals()
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
    this.chroniclesService.getMortalById(this.inputNumber)
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
