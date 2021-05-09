import { render, screen } from '@testing-library/react'
import TickerDetails from '.'

const tickerDetails = {
  logo: 'logo',
  sector: 'test sector',
  url: 'https://url.com',
  name: 'test name',
  symbol: 'exchange',
}

const changeSinceLastDay = {
  o: 125,
  c: 126,
}

describe('TickerDetails component', () => {
  it('renders TickerDetails as fragment', () => {
    const { asFragment } = render(
      <TickerDetails
        tickerDetails={tickerDetails}
        changeSinceLastDay={changeSinceLastDay}
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders ticker image with alt text', () => {
    render(
      <TickerDetails
        tickerDetails={tickerDetails}
        changeSinceLastDay={changeSinceLastDay}
      />
    )
    const tickerImage = screen.getByAltText(tickerDetails.name)

    expect(tickerImage).toBeInTheDocument()
  })

  it('renders ticker name', () => {
    render(
      <TickerDetails
        tickerDetails={tickerDetails}
        changeSinceLastDay={changeSinceLastDay}
      />
    )
    const tickerName = screen.getByText(tickerDetails.name)

    expect(tickerName).toBeInTheDocument()
  })

  it('renders ticker sector', () => {
    render(
      <TickerDetails
        tickerDetails={tickerDetails}
        changeSinceLastDay={changeSinceLastDay}
      />
    )
    const tickerSector = screen.getByText(tickerDetails.sector)

    expect(tickerSector).toBeInTheDocument()
  })
})
