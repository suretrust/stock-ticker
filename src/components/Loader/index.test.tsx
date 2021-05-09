import { render } from '@testing-library/react';
import Loading from '.';

describe('Loading component', () => {
  it('renders Loading as fragment', () => {
    const { asFragment } = render(<Loading />);

    expect(asFragment()).toMatchSnapshot();
  });
});
