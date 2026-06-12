import React, { useState, useEffect } from 'react';
import StrategyPanel from './components/StrategyPanel/StrategyPanel';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

const App = () => {
  const [strategies, setStrategies] = useState([
    {
      id: 1,
      name: 'RSI + Volume + EMA',
      leverage: 1,
      amount: 100,
      enabled: false,
      stopLoss: 2,
      takeProfit: 5,
    },
    {
      id: 2,
      name: 'Bollinger Bands + RSI',
      leverage: 1,
      amount: 100,
      enabled: false,
      stopLoss: 2,
      takeProfit: 5,
    },
    {
      id: 3,
      name: 'MACD + Stochastic',
      leverage: 1,
      amount: 100,
      enabled: false,
      stopLoss: 2,
      takeProfit: 5,
    },
    {
      id: 4,
      name: 'Moving Average Crossover',
      leverage: 1,
      amount: 100,
      enabled: false,
      stopLoss: 2,
      takeProfit: 5,
    },
    {
      id: 5,
      name: 'Support/Resistance Breakout',
      leverage: 1,
      amount: 100,
      enabled: false,
      stopLoss: 2,
      takeProfit: 5,
    },
  ]);

  const [tradingData, setTradingData] = useState({
    balance: 10000,
    portfolioValue: 10000,
    totalPnL: 0,
  });

  const handleStrategyUpdate = (strategyId, config) => {
    setStrategies((prevStrategies) =>
      prevStrategies.map((s) => (s.id === strategyId ? { ...s, ...config } : s))
    );
  };

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <div className="header-content">
            <h1>🤖 Coinswich Trading Bot</h1>
            <p>Advanced Multi-Strategy Cryptocurrency Trading System</p>
          </div>
        </header>

        <main className="app-main">
          <Dashboard tradingData={tradingData} />

          <section className="strategies-section">
            <h2 className="section-title">⚙️ Trading Strategies</h2>
            <div className="strategies-grid">
              {strategies.map((strategy) => (
                <StrategyPanel
                  key={strategy.id}
                  strategy={strategy}
                  onUpdate={handleStrategyUpdate}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
