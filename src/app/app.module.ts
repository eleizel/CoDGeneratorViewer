import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChroniclesComponent } from './chronicles/chronicles.component';
import { MortalService } from './chronicles.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MortalSheetComponent } from './mortal-sheet/mortal-sheet.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChroniclesComponent,
    MortalSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule
  ],
  providers: [MortalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
