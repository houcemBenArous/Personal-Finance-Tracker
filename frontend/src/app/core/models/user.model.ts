export interface User {
  id: string;
  name: string;
  email: string;
  currency: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
} 