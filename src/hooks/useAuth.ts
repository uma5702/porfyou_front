import { useState } from 'react';
import { signIn } from '../api/auth';

export const useAuth = () => {
  const [error, setError] = useState('');

  const login = async (email: string, password: string) => {
    try {
      const { accessToken } = await signIn(email, password);
      localStorage.setItem('token', accessToken);
      window.location.href = '/portfolio';
    } catch (err) {
      setError('아이디 또는 비밀번호 오류');
    }
  };

  return { login, error };
};
