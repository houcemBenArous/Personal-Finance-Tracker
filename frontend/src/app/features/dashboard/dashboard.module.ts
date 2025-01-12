import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { SavingsGoalsComponent } from './components/savings-goals/savings-goals.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TransactionListComponent,
    SavingsGoalsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { } 