import { render, screen } from '@testing-library/react';
import SearchInput from '.';

describe('SearchInput component', () => {
  it('renders SearchInput as fragment', () => {
    const { asFragment } = render(
      <SearchInput searchValue='test' handleSearchChange={() => jest.fn()} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders input element placeholder text', () => {
    render(
      <SearchInput searchValue='test' handleSearchChange={() => jest.fn()} />
    );
    const inputElement = screen.getByPlaceholderText(
      /Search for stock ticker/i
    );

    expect(inputElement).toBeTruthy();
  });
});
