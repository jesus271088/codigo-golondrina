import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgclassComponent } from './directiva/ngclass/ngclass.component';

const routes: Routes = [
  { path: '', redirectTo: '/directivas/ngclass', pathMatch: 'full' },
  { path: 'directivas/ngclass', component: NgclassComponent },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);

