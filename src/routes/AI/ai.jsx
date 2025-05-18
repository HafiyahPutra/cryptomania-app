import React, { useState } from "react";
import "./ai.css";

const coins = ["bitcoin", "ethereum", "binancecoin", "ripple", "solana"];

const Prediction = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [predictions, setPredictions] = useState({});

  // Ganti baseUrl dengan URL API Anda yang sudah dideploy
  const baseUrl = "https://crypto-price-prediction-0fob.onrender.com/predict";

  const fetchPredictions = async () => {
    setLoading(true);
    setError(null);
    setPredictions({});
    try {
      const results = {};
      for (const coin of coins) {
        const response = await fetch(`${baseUrl}/${coin}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${coin}: ${response.status}`);
        }
        const data = await response.json();
        results[coin] = data;
      }
      setPredictions(results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="prediction-container">
      <h1 className="title">Prediksi Harga Cryptocurrency 7 Hari ke Depan</h1>
      <button
        className="btn-fetch"
        onClick={fetchPredictions}
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? "Memuat..." : "Ambil Semua Prediksi"}
      </button>

      {error && <p className="error-message">Error: {error}</p>}

      {Object.keys(predictions).length > 0 && (
        <table className="prediction-table">
          <thead>
            <tr>
              <th>Koin</th>
              <th>Harga Prediksi (7 Hari)</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => {
              const data = predictions[coin];
              if (!data) return null;
              return (
                <tr key={coin}>
                  <td className="coin-name">{coin.charAt(0).toUpperCase() + coin.slice(1)}</td>
                  <td>
                    <ul className="price-list">
                      {data.predicted_close_price.map((price, idx) => (
                        <li key={idx} className="price-item">
                          Hari {idx + 1}: <span className="price-value">${price.toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Prediction;
