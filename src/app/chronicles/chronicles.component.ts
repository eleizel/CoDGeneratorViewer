// chronicles.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { MortalService } from '../chronicles.service';
import { MortalSheet, Skills, Attributes } from '../app.component'; 
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-chronicles',
  templateUrl: './chronicles.component.html',
  styleUrls: ['./chronicles.component.scss'],
})

export class ChroniclesComponent implements OnInit {
  resultData: MortalSheet[] = [];
  option: any; 
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
    })
  }

  findAll() {
    this.chroniclesService.getAllMortals()
    .subscribe((data) => {
      console.log(data);
      this.resultData = data;
      this.option = 'find-all';
      console.log(this.option);
    })
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
