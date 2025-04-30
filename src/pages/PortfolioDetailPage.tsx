import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { fetchPortfolio,deletePortfolio  } from '../api/portfolio';
import '../styles/portfolio.css';
import '../styles/components.css';

export default function PortfolioDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  

  useEffect(() => {
    if (id) fetchPortfolio(id).then(setData);
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
    await deletePortfolio(id!);
    navigate('/portfolio');
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div className="portfolio-detail-container">
      <div className="flex justify-between mb-4">
        <button onClick={handleDelete} className="button">삭제</button>
        <button onClick={() => navigate(`/portfolio/${id}/edit`)} className="button">수정</button>        
      </div>
      <div className="flex justify-between mb-4">
        <h1 className="portfolio-detail-title">{data.title}</h1>        
      </div>
      <img src="https://placehold.co/800x300?text=Thumbnail" alt="thumbnail" className="portfolio-detail-img" />

      <h1 className="portfolio-detail-title">{data.title}</h1>
      <p className="portfolio-detail-desc">{data.description}</p>

      <div className="portfolio-detail-meta">
        <span>❤️ {data.like || 0} Likes</span>
        <span>💬 {data.comment || 0} Comments</span>
      </div>
    </div>
  );
}
