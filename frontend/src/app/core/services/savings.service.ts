import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SavingsGoal } from '../models/savings-goal.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SavingsService {
  constructor(private http: HttpClient) {}

  getGoals(): Observable<SavingsGoal[]> {
    return this.http.get<SavingsGoal[]>(`${environment.apiUrl}/savings`);
  }

  createGoal(goal: Partial<SavingsGoal>): Observable<SavingsGoal> {
    return this.http.post<SavingsGoal>(`${environment.apiUrl}/savings`, goal);
  }
} 