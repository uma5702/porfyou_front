import React from 'react'
import { useEffect, useState } from 'react';
import { fetchPortfolios } from '../api/portfolio';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import '../styles/portfolio.css';
import '../styles/components.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function PortfolioListPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("PortfolioListPage useEffect");
    fetchPortfolios().then(setList);
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };


  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">나의 포트폴리오</h1>
        <Link to="/portfolio/create" className="button">등록하기</Link>
      </div>

      <Slider {...settings}>
        {list.map((item: any) => (
          <div key={item.id}>
            <Link to={`/portfolio/${item.id}`} className="card portfolio-card">
              <img src="https://placehold.co/400x160?text=Thumbnail" alt="thumbnail" />
              <div className="portfolio-info">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <div className="portfolio-meta mt-2">
                  <span>❤️ {item.like || 0}</span>
                  <span>💬 {item.comment || 0}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
