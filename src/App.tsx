import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import SignUpConfirmPage from './pages/SignUpConfirmPage';
import PortfolioListPage from './pages/PortfolioListPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import PortfolioFormPage from './pages/PortfolioFormPage';

import MainLayout from './layouts/MainLayout'

import StudyPage from './pages/StudyPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup-confirm" element={<SignUpConfirmPage />} />
        <Route element={<MainLayout />}>
          <Route path="/portfolio" element={<PortfolioListPage />} />
          <Route path="/portfolio/create" element={<PortfolioFormPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
          <Route path="/portfolio/:id/edit" element={<PortfolioFormPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// import React, { useEffect, useState } from 'react'

// const API_URL = 'http://localhost:3000/portfolio';

// type Portfolio = {
//   id: number;
//   title: string;
//   description: string;
//   githubUrl?: string;
//   googleDocUrl?: string;
// }

// const App = () => {
//   const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     fetch(API_URL, {
//       headers: { Authorization: 'Bearer dummy-token' }
//     }).then(res => res.json());
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("title",title);

//     const res = await fetch(API_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer dummy-token',
//       },
//       body: JSON.stringify({ title, description }),
//     });

//     const data = await res.json();
//     setPortfolios(data);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">포트폴리오 관리</h1>
//       <form onSubmit={handleSubmit} className="mb-6 space-y-2">
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="제목"
//           className="border p-2 w-full rounded"
//           required
//         />
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="설명"
//           className="border p-2 w-full rounded"
//           required
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           등록
//         </button>
//       </form>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {portfolios.map((p) => (
//           <div key={p.id} className="border p-4 rounded shadow">
//             <h2 className="text-xl font-semibold">{p.title}</h2>
//             <p className="text-gray-600">{p.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;