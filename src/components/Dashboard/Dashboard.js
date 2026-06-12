import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = ({ tradingData }) => {
  const [selectedMode, setSelectedMode] = useState('paper');
  const [walletInfo, setWalletInfo] = useState({
    balance: 10000,
    portfolioValue: 10000,
    totalPnL: 0,
    totalROI: 0,
  });

  useEffect(() => {
    if (tradingData) {
      const pnl = tradingData.portfolioValue - walletInfo.balance;
      const roi = (pnl / walletInfo.balance) * 100;
      setWalletInfo({
        balance: tradingData.balance || 10000,
        portfolioValue: tradingData.portfolioValue || 10000,
        totalPnL: pnl.toFixed(2),
        totalROI: roi.toFixed(2),
      });
    }
  }, [tradingData]);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Trading Dashboard</h2>
        <div className="mode-selector">
          <button
            className={`mode-btn ${selectedMode === 'paper' ? 'active' : ''}`}
            onClick={() => setSelectedMode('paper')}
          >
            📄 Paper Trading
          </button>
          <button
            className={`mode-btn ${selectedMode === 'real' ? 'active' : ''}`}
            onClick={() => setSelectedMode('real')}
          >
            💰 Real Trading
          </button>
        </div>
      </div>

      <div className="wallet-display">
        <div className="wallet-card">
          <div className="wallet-header">
            <span className="wallet-label">Account Balance</span>
            <span className="wallet-mode">({selectedMode === 'paper' ? 'Virtual' : 'Live'})</span>
          </div>
          <div className="wallet-value">${walletInfo.balance.toFixed(2)}</div>
          <div className="wallet-subtitle">Available Balance</div>
        </div>

        <div className="wallet-card">
          <div className="wallet-header">
            <span className="wallet-label">Portfolio Value</span>
          </div>
          <div className="wallet-value">${walletInfo.portfolioValue.toFixed(2)}</div>
          <div className="wallet-subtitle">Total Holdings</div>
        </div>

        <div className={`wallet-card ${parseFloat(walletInfo.totalPnL) >= 0 ? 'positive' : 'negative'}`}>
          <div className="wallet-header">
            <span className="wallet-label">Total P&L</span>
          </div>
          <div className="wallet-value">${walletInfo.totalPnL}</div>
          <div className="wallet-subtitle">Profit/Loss</div>
        </div>

        <div className={`wallet-card ${parseFloat(walletInfo.totalROI) >= 0 ? 'positive' : 'negative'}`}>
          <div className="wallet-header">
            <span className="wallet-label">ROI</span>
          </div>
          <div className="wallet-value">{walletInfo.totalROI}%</div>
          <div className="wallet-subtitle">Return on Investment</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
