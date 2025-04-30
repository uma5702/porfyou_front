var token = localStorage.getItem('token');
const portfolioURL = import.meta.env.VITE_API_URL+'/portfolio';
// const portfolioURL = 'http://localhost:3000/portfolio';

export const fetchPortfolios = async () => {
  token = localStorage.getItem('token');
  
  const res = await fetch(portfolioURL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const fetchPortfolio = async (id: string) => {
  token = localStorage.getItem('token');
  console.log("fetchPortfolio - ",id);
  const res = await fetch(portfolioURL+`/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const createPortfolio = async (title: string, description: string) => {
  token = localStorage.getItem('token');
  const res = await fetch(portfolioURL, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}` 
    },
    body: JSON.stringify({ title, description }),
  });
  return res.json();
};
export const updatePortfolio = async (id: string, title: string, description: string) => {
  token = localStorage.getItem('token');

  const res = await fetch(portfolioURL+`/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, description }),
  });
  return res.json();
};
export const deletePortfolio = async (id: string) => {
  token = localStorage.getItem('token');

  const res = await fetch(portfolioURL+`/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};
