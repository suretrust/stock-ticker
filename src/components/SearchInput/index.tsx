import React from 'react';
import './style.css';

interface SearchInputProps {
  searchValue: string;
  handleSearchChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchValue,
  handleSearchChange,
}) => {
  return (
    <input
      autoFocus
      value={searchValue}
      onChange={handleSearchChange}
      type='text'
      placeholder='Search for stock ticker'
    />
  );
};

export default SearchInput;
