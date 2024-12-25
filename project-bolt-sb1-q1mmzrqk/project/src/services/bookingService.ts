import { BookingFormData } from '../types/booking';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

export const saveBooking = async (formData: BookingFormData): Promise<boolean> => {
  try {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    
    if (userError || !user) {
      toast.error('Please try again in a moment');
      return false;
    }

    const { error: bookingError } = await supabase
      .from('bookings')
      .insert({
        user_id: user.id,
        ...formData,
        status: 'pending'
      });

    if (bookingError) {
      console.error('Booking error:', bookingError);
      throw bookingError;
    }

    // Send confirmation email
    await sendConfirmationEmail(formData.email);
    
    return true;
  } catch (error) {
    console.error('Error saving booking:', error);
    toast.error('Failed to save booking. Please try again.');
    return false;
  }
};

const sendConfirmationEmail = async (email: string): Promise<void> => {
  try {
    // In a real application, you would integrate with an email service
    console.log('Sending confirmation email to:', email);
    await new Promise(resolve => setTimeout(resolve, 1000));
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    // Don't show toast for email failure as the booking was successful
  }
};