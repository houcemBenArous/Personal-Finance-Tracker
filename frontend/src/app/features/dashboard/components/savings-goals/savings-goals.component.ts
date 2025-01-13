import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavingsService } from '../../../../core/services/savings.service';
import { SavingsGoal } from '../../../../core/models/savings-goal.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-savings-goals',
  templateUrl: './savings-goals.component.html',
  styleUrls: ['./savings-goals.component.css'],
  standalone: true,
  imports: [CommonModule, CurrencyPipe]
})
export class SavingsGoalsComponent implements OnInit {
  goals: SavingsGoal[] = [];
  loading = false;
  error = '';

  constructor(private savingsService: SavingsService) {}

  ngOnInit(): void {
    this.loadGoals();
  }

  loadGoals(): void {
    this.loading = true;
    this.savingsService.getGoals().subscribe({
      next: (data) => {
        this.goals = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des objectifs';
        this.loading = false;
      }
    });
  }

  calculateProgress(goal: SavingsGoal): number {
    return (goal.currentAmount / goal.targetAmount) * 100;
  }
} 