import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'wouter';
import { Form } from '../types';
import { apiGetForm, apiUpdateForm } from '../api';

const FormEditor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [form, setForm] = useState<Form>({ id: '', title: '', questions: [] });
  const [, setLocation] = useLocation();

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await apiGetForm(id);
        setForm(response!);
      } catch (error) {
        console.error('Error fetching form:', error);
      }
    };

    fetchForm();
  }, [id]);

  const handleSave = async () => {
    try {
      await apiUpdateForm(id, form);
      setLocation('/forms');
    } catch (error) {
      console.error('Error saving form:', error);
    }
  };

  const handleCancel = () => {
    setLocation('/forms');
  };

  return (
    <div>
      <h2>Edit Form</h2>
      <input
        type="text"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        placeholder="Form Title"
      />
      <div>
        TODO: Add/remove questions
      </div>
      <button onClick={handleSave}>Save Form</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default FormEditor;