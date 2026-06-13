export interface ApiResponse<T = any> {
  message: string;
  data?: T;             // This can adapt to any shape you pass in
  status?: number;     // Optional: if your backend sends status keys
}