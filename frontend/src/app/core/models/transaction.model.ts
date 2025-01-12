export interface Transaction {
  id: string;
  type: 'INCOME' | 'EXPENSE';
  amount: number;
  category: string;
  description?: string;
  date: Date;
  UserId: string;
} 