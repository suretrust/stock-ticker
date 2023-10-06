import React from 'react';
import Axios from 'axios';
import { ChangeSinceLastDayProps, TickerDetailsProps } from '../App';
import { POLYGON_API_KEY } from './secret';

interface TickerDetailsFunctions {
  setTickerDetails: React.Dispatch<
    React.SetStateAction<TickerDetailsProps | null>
  >;
  setChangeSinceLastDay: React.Dispatch<
    React.SetStateAction<ChangeSinceLastDayProps | null>
  >;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface StockTickerFunctions {
  setAllTickers: React.Dispatch<React.SetStateAction<never[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const getStockTicker = (value: string, setFunctions: StockTickerFunctions) => {
  const { setAllTickers, setError, setIsLoading } = setFunctions;
  if (!value) return;
  const url = `https://api.polygon.io/v3/reference/tickers?market=stocks&search=${value}&active=true&sort=ticker&order=asc&limit=10&apiKey=${POLYGON_API_KEY}`;

  Axios.get(url)
    .then((response) => {
      const {
        data: { results },
      } = response;
      if (!results?.length) return setError(true);

      setAllTickers(results);
    })
    .catch(() => {
      setError(true);
    })
    .finally(() => {
      setIsLoading(false);
    });
};

const getTickerDetails = (
  symbol: string,
  setFunctions: TickerDetailsFunctions
) => {
  const { setTickerDetails, setChangeSinceLastDay, setError, setIsLoading } =
    setFunctions;
  if (!symbol) return;
  const url = `https://api.polygon.io/v1/meta/symbols/${symbol}/company?&apiKey=${POLYGON_API_KEY}`;

  const url2 = `https://api.polygon.io/v2/aggs/ticker/${symbol}/prev?unadjusted=true&apiKey=${POLYGON_API_KEY}`;

  Axios.get(url)
    .then((response) => {
      const { data } = response;

      setTickerDetails(data);
    })
    .then(() => {
      Axios.get(url2).then((response) => {
        const {
          data: { results },
        } = response;

        setChangeSinceLastDay(results[0]);
      });
    })
    .catch(() => {
      setTickerDetails(null);
      setError(true);
    })
    .finally(() => {
      setIsLoading(false);
    });
};

const api = { getStockTicker, getTickerDetails };

export default api;
