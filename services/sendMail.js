import axios from 'axios';

export const sendContactMail = async (nome, email, phone, company) => {
  const data = {
    nome, email, phone, company
  };

  try {
  return await axios.post('/api/contact', data);
  } catch (error) {
    return error;
  }
}