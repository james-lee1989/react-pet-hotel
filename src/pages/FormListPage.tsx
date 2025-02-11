import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { apiGetForms } from '../api';
import { Form } from '../types';

const FormList: React.FC = () => {
  const [forms, setForms] = useState<Form[]>([]);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await apiGetForms();
        setForms(response);
      } catch (error) {
        console.error('Error fetching forms:', error);
      }
    };

    fetchForms();
  }, []);

  return (
    <div>
      <h2>Forms</h2>
      <ul>
        {forms.map((form: { id: string; title: string }) => (
          <li key={form.id}>
            <Link to={`/forms/${form.id}/edit`}>{form.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormList;
