export interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  service: string;
  message: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  service: string;
  message: string;
}