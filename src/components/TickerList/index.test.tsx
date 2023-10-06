import { render, screen, fireEvent } from '@testing-library/react';
import TickerList from '.';

const allTickers = [
  {
    name: 'test name',
    ticker: 'TEST',
  },
  {
    name: 'test name 2',
    ticker: 'TEST',
  },
];

const handleTickerClick = jest.fn();

describe('TickerList component', () => {
  it('renders TickerList as fragment', () => {
    const { asFragment } = render(
      <TickerList
        allTickers={allTickers}
        handleTickerClick={handleTickerClick}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders first ticker name from list of all tickers', () => {
    render(
      <TickerList
        allTickers={allTickers}
        handleTickerClick={handleTickerClick}
      />
    );
    const tickerName = screen.getByText(allTickers[0].name);

    expect(tickerName).toBeTruthy();
  });

  it('renders second ticker name from list of all tickers', () => {
    render(
      <TickerList
        allTickers={allTickers}
        handleTickerClick={handleTickerClick}
      />
    );
    const tickerName = screen.getByText(allTickers[1].name);

    expect(tickerName).toBeTruthy();
  });

  it('calls handleTickerClick on clicking first ticker name', () => {
    render(
      <TickerList
        allTickers={allTickers}
        handleTickerClick={handleTickerClick}
      />
    );
    const tickerName = screen.getByText(allTickers[0].name);
    fireEvent.click(tickerName);

    expect(handleTickerClick).toHaveBeenCalledTimes(1);
    expect(handleTickerClick).toHaveBeenCalledWith(allTickers[0].ticker);
  });

  it('calls handleTickerClick with ticker on clicking second ticker name', () => {
    render(
      <TickerList
        allTickers={allTickers}
        handleTickerClick={handleTickerClick}
      />
    );
    const tickerName = screen.getByText(allTickers[1].name);
    fireEvent.click(tickerName);

    expect(handleTickerClick).toHaveBeenCalledWith(allTickers[1].ticker);
  });
});
