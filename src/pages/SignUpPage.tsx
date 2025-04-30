import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../api/auth';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await signUp(email, password);
    navigate('/signup-confirm');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Sign Up</h1>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 w-full mb-2" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="border p-2 w-full mb-2" />
      <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 w-full">회원가입</button>
    </div>
  );
}
