import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Transaction } from '../models/transaction.model';
import { SavingsGoal } from '../models/savings-goal.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private transactionsSubject = new BehaviorSubject<Transaction[]>([]);
  private savingsGoalsSubject = new BehaviorSubject<SavingsGoal[]>([]);

  transactions$ = this.transactionsSubject.asObservable();
  savingsGoals$ = this.savingsGoalsSubject.asObservable();

  updateTransactions(transactions: Transaction[]) {
    this.transactionsSubject.next(transactions);
  }

  updateSavingsGoals(goals: SavingsGoal[]) {
    this.savingsGoalsSubject.next(goals);
  }
} 