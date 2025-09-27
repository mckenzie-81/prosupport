import axios from 'axios';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
  intent?: 'partnership' | 'quote' | 'general';
}

const validateFormData = (data: ContactFormData): string | null => {
  if (!data.name.trim()) return 'Name is required';
  if (!data.email.trim()) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Please enter a valid email address';
  if (!data.message.trim()) return 'Message is required';
  if (data.message.trim().length < 10) return 'Message must be at least 10 characters long';
  return null;
};

export const contactService = {
  async submitForm(data: ContactFormData) {
    // Validate form data
    const validationError = validateFormData(data);
    if (validationError) {
      throw new Error(validationError);
    }

    try {
      const response = await axios.post('https://formspree.io/f/meorelkz', {
        name: data.name.trim(),
        email: data.email.trim(),
        phone: data.phone?.trim() || '',
        company: data.company?.trim() || '',
        service: data.service || '',
        message: data.message.trim(),
        intent: data.intent || 'general',
        _reply_to: data.email.trim(),
        _subject: `New contact from ${data.name.trim()} - ${data.service || 'General Inquiry'}`
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        timeout: 10000 // 10 second timeout
      });
      
      if (response.status === 200 || response.status === 201) {
        return { success: true, message: 'Message sent successfully!' };
      } else {
        throw new Error('Unexpected response from server');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNABORTED') {
          throw new Error('Request timed out. Please check your connection and try again.');
        } else if (error.response?.status === 422) {
          throw new Error('Please check your form data and try again.');
        } else if (error.response?.status === 429) {
          throw new Error('Too many requests. Please wait a moment and try again.');
        } else if (error.response?.status >= 500) {
          throw new Error('Server error. Please try again later.');
        } else if (!error.response) {
          throw new Error('Network error. Please check your connection and try again.');
        }
      }
      throw new Error('Failed to send message. Please try again.');
    }
  }
};

export const submitContactForm = async (data: ContactFormData) => {
  return contactService.submitForm(data);
};