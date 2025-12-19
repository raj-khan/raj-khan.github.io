import { apiClient } from './client';

export interface User {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export const authApi = {
  async register(data: RegisterInput): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/auth/register', data);
    if (response.data) {
      // Store tokens
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      return response.data;
    }
    throw new Error(response.message || 'Registration failed');
  },

  async login(data: LoginInput): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/auth/login', data);
    if (response.data) {
      // Store tokens
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      return response.data;
    }
    throw new Error(response.message || 'Login failed');
  },

  async getProfile(): Promise<User> {
    const response = await apiClient.get<User>('/auth/profile', true);
    if (response.data) {
      return response.data;
    }
    throw new Error(response.message || 'Failed to get profile');
  },

  async updateProfile(data: { name?: string; image?: string }): Promise<User> {
    const response = await apiClient.put<User>('/auth/profile', data, true);
    if (response.data) {
      return response.data;
    }
    throw new Error(response.message || 'Failed to update profile');
  },

  async changePassword(data: {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
  }): Promise<void> {
    const response = await apiClient.post('/auth/change-password', data, true);
    if (!response.success) {
      throw new Error(response.message || 'Failed to change password');
    }
  },

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },

  getAccessToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('accessToken');
    }
    return null;
  },

  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  },
};
