import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signIn } from '../api/auth';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const { accessToken } = await signIn(email, password);
      localStorage.setItem('token', accessToken);
      localStorage.setItem('email', email);
      navigate('/portfolio');
    } catch (err) {
      setError('아이디 또는 비밀번호 오류');
    }
  };

  return (
    <div className="p-4 w-[300px]">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <p className="text-gray-600 text-sm ">입력해주세요.</p>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 w-full mb-2" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="border p-2 w-full mb-2" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 w-full">로그인</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <Link to="/signup" className="text-sm text-blue-500 block mt-2">회원가입</Link>
    </div>
  );
}


// import { useState } from 'react';
// import { useAuth } from '../hooks/useAuth';

// export default function SignInPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login, error } = useAuth();

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl mb-4">로그인</h1>
//       <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" className="border p-2 w-full mb-2" />
//       <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="border p-2 w-full mb-2" />
//       <button onClick={() => login(email, password)} className="bg-blue-500 text-white px-4 py-2">로그인</button>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//     </div>
//   );
// }
