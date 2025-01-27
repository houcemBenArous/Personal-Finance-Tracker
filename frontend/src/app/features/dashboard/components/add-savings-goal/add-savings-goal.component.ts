import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SavingsService } from '../../../../core/services/savings.service';
import { StateService } from '../../../../core/services/state.service';

@Component({
  selector: 'app-add-savings-goal',
  templateUrl: './add-savings-goal.component.html',
  styleUrls: ['./add-savings-goal.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class AddSavingsGoalComponent {
  savingsForm: FormGroup;
  error = '';

  constructor(
    private fb: FormBuilder,
    private savingsService: SavingsService,
    private stateService: StateService
  ) {
    this.savingsForm = this.fb.group({
      name: ['', Validators.required],
      targetAmount: ['', [Validators.required, Validators.min(1)]],
      deadline: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.savingsForm.valid) {
      this.savingsService.createGoal(this.savingsForm.value).subscribe({
        next: () => {
          this.savingsForm.reset();
          this.savingsService.getGoals().subscribe(
            goals => this.stateService.updateSavingsGoals(goals)
          );
        },
        error: (err) => this.error = err.error.message || 'Erreur lors de la création'
      });
    }
  }
} 