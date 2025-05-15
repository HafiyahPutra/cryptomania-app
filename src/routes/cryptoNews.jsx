import React, { useEffect, useState } from "react";
import "./cryptoNews.css";

function CryptoNews() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("https://serverless-newsapi.vercel.app/api/news");  // Panggil serverless function di Vercel
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status} - ${res.statusText}`);
        }
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) return <div>Loading cryptocurrency news...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data || !data.articles) return <div>No news found.</div>;

  return (
    <div className="crypto-news">
      <h1>Cryptocurrency News</h1>
      <ul className="news-list">
        {data.articles.map((article, idx) => (
          <li key={idx} className="news-item">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="news-image" />
            )}
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-title">
              <strong>{article.title}</strong>
            </a>
            <div className="news-meta">
              <em>{article.source.name}</em> | {new Date(article.publishedAt).toLocaleString()}
            </div>
            <p className="news-description">{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CryptoNews;
