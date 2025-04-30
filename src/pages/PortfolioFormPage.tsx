import React from 'react'
import { useEffect,useState } from 'react';
import { createPortfolio, fetchPortfolio, updatePortfolio } from '../api/portfolio';
import { useParams,useNavigate } from 'react-router-dom';
import '../styles/portfolio.css';
import '../styles/components.css';

export default function PortfolioFormPage() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const isEdit = !!id;

  useEffect(() => {
    if (isEdit) {
      fetchPortfolio(id!).then((data) => {
        console.log('fetchPortfolio',data);
        setTitle(data.title);
        setDescription(data.description);
        setCategory(data.category);
      });
    }
  }, [id]);

  const handleSubmit = async () => {
    if (!title || !description) {
      alert('제목과 설명을 입력해주세요.');
      return;
    }

    if (isEdit) {
      await updatePortfolio(id!, title, description);
    } else {
      await createPortfolio(title, description);
    }

    navigate('/portfolio');
  };

  return (
    <div className="portfolio-form-container">
      <h1 className="portfolio-form-title">{isEdit ? '포트폴리오 수정' : '포트폴리오 등록'}</h1>

      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목" className="input" />
      
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="설명" className="input textarea" />
      
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="input">
        <option value="">카테고리 선택</option>
        <option value="web">웹 개발</option>
        <option value="app">앱 개발</option>
        <option value="design">디자인</option>
      </select>

      <button onClick={handleSubmit} className="button">{isEdit ? '수정하기' : '등록하기'}</button>
    </div>
  );
}
