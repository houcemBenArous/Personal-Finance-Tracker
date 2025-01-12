export interface SavingsGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline?: Date;
  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
  UserId: string;
} 