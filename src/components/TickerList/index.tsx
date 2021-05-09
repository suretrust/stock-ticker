import React from 'react';
import './style.css';

interface TickerListProps {
  allTickers: any[];
  handleTickerClick: (symbol: string) => void;
}

interface Ticker {
  ticker: string;
  name: string;
}

const TickerList: React.FC<TickerListProps> = ({
  allTickers,
  handleTickerClick,
}) => {
  if (!allTickers?.length) return null;

  return (
    <div className='ticker-list'>
      {allTickers.map((ticker: Ticker) => (
        <div
          className='ticker'
          key={ticker.name}
          onClick={() => handleTickerClick(ticker.ticker)}
        >
          <div>{ticker.name}</div>
        </div>
      ))}
    </div>
  );
};

export default TickerList;
