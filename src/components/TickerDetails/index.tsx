import React from 'react';
import { ChangeSinceLastDayProps, TickerDetailsProps } from '../../App';
import { getPercentageChange } from '../../utilities';
import './style.css';

interface Props {
  tickerDetails: TickerDetailsProps | null;
  changeSinceLastDay: ChangeSinceLastDayProps | null;
}

const TickerDetails: React.FC<Props> = ({
  tickerDetails,
  changeSinceLastDay,
}) => {
  if (!tickerDetails) return null;

  const getPriceColor = () => {
    if (!changeSinceLastDay) return;

    const color = isNegative ? 'red' : '#37AD94';

    return { color };
  };

  const isNegative = changeSinceLastDay
    ? getPercentageChange(changeSinceLastDay.o, changeSinceLastDay.c).isNegative
    : null;

  return (
    <div className='ticker-details-box'>
      <img
        className='ticker-logo'
        src={tickerDetails.logo}
        alt={tickerDetails.name}
      />
      <div className='ticker-name'>{tickerDetails.name}</div>
      <div className='ticker-sector'>{tickerDetails.sector}</div>
      {changeSinceLastDay && (
        <div className='price-and-color'>
          <div className='ticker-price'>{changeSinceLastDay.c} USD</div>
          <div
            className={`ticker-color ticker-${isNegative ? 'down' : 'up'}`}
            style={getPriceColor()}
          >
            {
              getPercentageChange(changeSinceLastDay.o, changeSinceLastDay.c)
                .percentage
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default TickerDetails;
