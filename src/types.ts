export interface Form {
  id: string;
  title: string;
  questions: string[];
}

export interface User {
  username: string;
  role: 'editor' | 'viewer';
}