import React, { useState, useEffect } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import TickerList from './components/TickerList';
import api from './api.js';
import TickerDetails from './components/TickerDetails';
import Loading from './components/Loader';

export interface TickerDetailsProps {
  logo: string;
  sector: string;
  name: string;
  symbol: string;
}

export interface ChangeSinceLastDayProps {
  o: number;
  c: number;
}

const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [allTickers, setAllTickers] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tickerDetails, setTickerDetails] = useState<null | TickerDetailsProps>(
    null
  );
  const [
    changeSinceLastDay,
    setChangeSinceLastDay,
  ] = useState<null | ChangeSinceLastDayProps>(null);

  useEffect(() => {
    if (!searchValue) return;
    const timeout = setTimeout(
      () =>
        api.getStockTicker(searchValue, {
          setAllTickers,
          setError,
          setIsLoading,
        }),
      1000
    );

    return () => clearTimeout(timeout);
  }, [searchValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);

    const { value } = event.target;
    setSearchValue(value.toUpperCase());
    if (!value) return setAllTickers([]);

    setIsLoading(true);
    setTickerDetails(null);
  };

  const handleTickerClick = (symbol: string) => {
    if (!symbol) return;

    setAllTickers([]);
    setIsLoading(true);

    api.getTickerDetails(symbol, {
      setTickerDetails,
      setChangeSinceLastDay,
      setError,
      setIsLoading,
    });
  };

  return (
    <div className='container'>
      <SearchInput
        handleSearchChange={handleSearchChange}
        searchValue={searchValue}
      />
      {error && (
        <div className='error'>
          Sorry, the data for <b>{searchValue}</b> is not available.
        </div>
      )}
      {isLoading && <Loading />}
      <TickerList
        handleTickerClick={handleTickerClick}
        allTickers={allTickers}
      />
      <TickerDetails
        changeSinceLastDay={changeSinceLastDay}
        tickerDetails={tickerDetails}
      />
    </div>
  );
};

export default App;
