import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../../../../core/services/transaction.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {
  transactionForm: FormGroup;
  error = '';

  categories = [
    'Alimentation', 'Transport', 'Logement', 'Loisirs', 
    'Santé', 'Éducation', 'Salaire', 'Investissement'
  ];

  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionService
  ) {
    this.transactionForm = this.fb.group({
      type: ['EXPENSE', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      description: [''],
      date: [new Date().toISOString().split('T')[0], Validators.required]
    });
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      this.transactionService.createTransaction(this.transactionForm.value).subscribe({
        next: () => {
          this.transactionForm.reset({
            type: 'EXPENSE',
            date: new Date().toISOString().split('T')[0]
          });
          // Émettre un événement pour rafraîchir la liste
        },
        error: (err) => this.error = err.error.message || 'Erreur lors de la création'
      });
    }
  }
} 