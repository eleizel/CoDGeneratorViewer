import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChroniclesComponent } from './chronicles/chronicles.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chronicles', 
    component: ChroniclesComponent,
    children : [
      {path: 'create-random', component : ChroniclesComponent},
      {path: 'find-all', component : ChroniclesComponent},
      {path: 'find-one/:id', component : ChroniclesComponent},
      {path: 'delete-all', component : ChroniclesComponent},
      {path: 'delete-one/:id', component : ChroniclesComponent}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
