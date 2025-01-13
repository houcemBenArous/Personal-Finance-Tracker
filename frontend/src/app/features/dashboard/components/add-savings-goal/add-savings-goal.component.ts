import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SavingsService } from '../../../../core/services/savings.service';

@Component({
  selector: 'app-add-savings-goal',
  templateUrl: './add-savings-goal.component.html',
  styleUrls: ['./add-savings-goal.component.css']
})
export class AddSavingsGoalComponent {
  savingsForm: FormGroup;
  error = '';

  constructor(
    private fb: FormBuilder,
    private savingsService: SavingsService
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
        },
        error: (err) => this.error = err.error.message || 'Erreur lors de la création'
      });
    }
  }
} 