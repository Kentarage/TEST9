import React, { useState } from 'react';
import { useBooking } from '../hooks/useBooking';
import { BookingFormData } from '../types/booking';
import { validateBookingForm } from '../utils/validation';
import { Toaster } from 'react-hot-toast';
import FormInput from './form/FormInput';
import FormSelect from './form/FormSelect';
import FormTextarea from './form/FormTextarea';

const serviceOptions = [
  { value: 'wedding', label: 'Photographie de Mariage (300 000 AR)' },
  { value: 'portrait', label: 'Séances Portrait (80 000 AR)' },
  { value: 'event', label: 'Événements (140 000 AR)' }
];

export default function BookingForm() {
  const { submitBooking, isSubmitting } = useBooking();
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateBookingForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const success = await submitBooking(formData);
    if (success) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        service: '',
        message: ''
      });
      setErrors({});
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Toaster position="top-center" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Réserver une Séance</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            label="Nom Complet"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            required
            placeholder="Jean Dupont"
          />

          <FormInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
            placeholder="jean@exemple.com"
          />

          <FormInput
            label="Téléphone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
            placeholder="+261 34 00 000 00"
          />

          <FormInput
            label="Date Souhaitée"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            error={errors.date}
            required
          />

          <FormSelect
            label="Type de Service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            options={serviceOptions}
            error={errors.service}
            required
          />

          <FormTextarea
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            placeholder="Parlez-nous de votre vision pour la séance photo..."
          />

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium transition
                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'}`}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Réserver Maintenant'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}