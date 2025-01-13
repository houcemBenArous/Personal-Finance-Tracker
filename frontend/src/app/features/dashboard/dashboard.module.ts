import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { SavingsGoalsComponent } from './components/savings-goals/savings-goals.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { AddSavingsGoalComponent } from './components/add-savings-goal/add-savings-goal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TransactionListComponent,
    SavingsGoalsComponent,
    AddTransactionComponent,
    AddSavingsGoalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { } 