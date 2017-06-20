import { BankDetailsComponent } from './bank.detail.component';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'details', component: BankDetailsComponent },    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
