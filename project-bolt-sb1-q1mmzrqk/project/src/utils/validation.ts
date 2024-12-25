export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[\d\s-]{10,}$/;
  return phoneRegex.test(phone);
};

export const validateDate = (date: string): boolean => {
  const selectedDate = new Date(date);
  const today = new Date();
  return selectedDate >= today;
};

export const validateBookingForm = (formData: Record<string, string>): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!formData.name?.trim()) {
    errors.name = 'Name is required';
  }

  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Invalid email format';
  }

  if (!formData.phone?.trim()) {
    errors.phone = 'Phone is required';
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Invalid phone format';
  }

  if (!formData.date) {
    errors.date = 'Date is required';
  } else if (!validateDate(formData.date)) {
    errors.date = 'Date must be in the future';
  }

  if (!formData.service) {
    errors.service = 'Service is required';
  }

  return errors;
};