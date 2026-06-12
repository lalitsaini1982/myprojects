# Coinswich Trading Bot 🤖💰

Advanced cryptocurrency trading bot with 5 professional trading strategies, paper trading mode, real trading integration, and intelligent position management.

## Features

✅ **5 Professional Trading Strategies**
- Strategy 1: RSI + Volume + EMA
- Strategy 2: Bollinger Bands + RSI
- Strategy 3: MACD + Stochastic
- Strategy 4: Moving Average Crossover
- Strategy 5: Support/Resistance Breakout

✅ **Advanced Controls**
- Adjustable Leverage (1x - 125x)
- Custom Position Sizing
- Risk Management with Stop Loss/Take Profit
- Real-time Balance Tracking

✅ **Trading Modes**
- 📄 Paper Trading (Virtual Money)
- 💵 Real Trading (Live Funds)

✅ **Dashboard**
- Wallet Balance Display
- Real-time P&L Tracking
- Strategy Performance Analytics
- Trade History

## Tech Stack

- **Frontend**: React 18 + Tailwind CSS
- **Desktop**: Electron
- **Technical Analysis**: TA-Lib
- **Database**: SQLite
- **Exchange**: Binance API
- **Real-time Data**: WebSocket

## Project Structure

```
coinswich-trading-bot/
├── src/
│   ├── components/
│   │   ├── StrategyPanel/
│   │   ├── Dashboard/
│   │   ├── WalletDisplay/
│   │   └── TradeHistory/
│   ├── strategies/
│   │   ├── BaseStrategy.js
│   │   ├── RSIVolumeEMA.js
│   │   ├── BollingerBandsRSI.js
│   │   ├── MACDStochastic.js
│   │   ├── MAcrossover.js
│   │   └── SupportResistance.js
│   ├── trading/
│   │   ├── TradingEngine.js
│   │   ├── PaperTrading.js
│   │   ├── RealTrading.js
│   │   └── PositionManager.js
│   ├── exchange/
│   │   ├── BinanceAPI.js
│   │   └── MarketData.js
│   ├── utils/
│   ├── App.js
│   └── index.js
├── public/
├── main.js (Electron entry)
└── .env.example
```

## Installation

```bash
npm install
```

## Development

```bash
npm start
```

## Build

```bash
npm run build
```

## Configuration

Create a `.env` file:

```env
BINANCE_API_KEY=your_api_key
BINANCE_SECRET_KEY=your_secret_key
PAPER_TRADING_BALANCE=10000
REAL_TRADING_ENABLED=false
```

## Usage

1. **Select Trading Mode**: Choose between Paper Trading or Real Trading
2. **Configure Strategies**: Set leverage, amount, and enable/disable each strategy
3. **Monitor Dashboard**: Track balance, P&L, and trade execution
4. **View Trade History**: Analyze past trades and performance

## Trading Strategies

### Strategy 1: RSI + Volume + EMA
Uses Relative Strength Index combined with volume analysis and Exponential Moving Average for trend confirmation.

### Strategy 2: Bollinger Bands + RSI
Detects overbought/oversold conditions using Bollinger Bands with RSI confirmation.

### Strategy 3: MACD + Stochastic
Combines MACD trend signals with Stochastic momentum indicators.

### Strategy 4: Moving Average Crossover
Classic strategy using fast and slow moving average crossovers.

### Strategy 5: Support/Resistance Breakout
Identifies key support/resistance levels and trades breakouts.

## Risk Disclaimer

⚠️ **WARNING**: Cryptocurrency trading is highly risky. Use paper trading mode first to test strategies. Always use risk management with stop losses. Never invest more than you can afford to lose.

## License

MIT
