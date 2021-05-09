import React from 'react';
import Loader from 'react-loader-spinner';
import './style.css';

const Loading: React.FC = () => {
  return (
    <div className='loading'>
      <Loader type='Grid' color='#e3e8eb' height={80} width={80} />
    </div>
  );
};

export default Loading;
