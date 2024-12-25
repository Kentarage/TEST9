import { useState } from 'react';
import { BookingFormData } from '../types/booking';
import { saveBooking } from '../services/bookingService';
import toast from 'react-hot-toast';

export const useBooking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitBooking = async (formData: BookingFormData) => {
    setIsSubmitting(true);
    try {
      const success = await saveBooking(formData);
      
      if (success) {
        toast.success('Booking request submitted successfully! Check your email for confirmation.');
        return true;
      } else {
        toast.error('Failed to submit booking request. Please try again.');
        return false;
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitBooking,
    isSubmitting
  };
};