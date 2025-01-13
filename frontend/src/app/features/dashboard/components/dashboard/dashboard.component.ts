import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import { User } from '../../../../core/models/user.model';
import { AddTransactionComponent } from '../add-transaction/add-transaction.component';
import { AddSavingsGoalComponent } from '../add-savings-goal/add-savings-goal.component';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import { SavingsGoalsComponent } from '../savings-goals/savings-goals.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    AddTransactionComponent,
    AddSavingsGoalComponent,
    TransactionListComponent,
    SavingsGoalsComponent
  ]
})
export class DashboardComponent implements OnInit {
  currentUser: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  onLogout(): void {
    this.authService.logout();
  }
} 