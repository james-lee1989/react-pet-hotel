import { Form, User } from '../types';

let forms: Form[] = [
  { id: '1', title: 'Form 1', questions: ['Question 1', 'Question 2'] },
  { id: '2', title: 'Form 2', questions: ['Question A', 'Question B'] },
];

let users: User[] = [
    { username: 'john', role: 'viewer' },
    { username: 'jane', role: 'editor' }
];

export const apiLogin = async (username: string): Promise<User | null> => {
  const user = users.find((u: User) => u.username === username);
  return user || null;
};

export const apiGetForms = (): Promise<Form[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(forms), 3000));
};

export const apiGetForm = (id: string): Form | null => {
  const form = forms.find((form) => form.id === id);
  return form || null;
};

export const apiUpdateForm = (id: string, updatedForm: Form): Form => {
  forms = forms.map((form) => (form.id === id ? updatedForm : form));
  return updatedForm;
};