# Ticker App

This is a simple React stock ticker app with an integrated API (Polygon.io). This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<img width="1440" alt="Screenshot 2021-05-09 at 21 31 30" src="https://user-images.githubusercontent.com/31304943/117589605-7bdcbb80-b122-11eb-94bc-11f6a21323f1.png">
<img width="1440" alt="Screenshot 2021-05-09 at 21 31 50" src="https://user-images.githubusercontent.com/31304943/117589611-8303c980-b122-11eb-8681-30b1d359ec08.png">


### Requirements

1. A user can type in a stock ticker (Ex: TSLA) and it displays a list of tickers matching with the input, in real time
    - The input can be typed partially and display relevant results(Ex: `TSLA` should show the Tesla stock)
    - The input can also be the name of the company (Ex: `Tesla` should show Tesla stock)
    - Optional: The price of each stock is listed
2. A user can select a ticker from the list
3. When selected, it displays the name of the ticker with the change since last day.

### Tech Stack

- React and Typescript
- Code is tested with Jest and react-testing-library.

### Design

 [Figma Design](https://www.figma.com/file/npYI4Am7sdgzH2VZSVmZYl/Test-Task-Ticker-Impakt) — Due to the response from the search API and limit of 5 responses within a minute (for free plan), the design was slightly derailed.


### Setup
1. To set up, rename `env.template` to `.env` or `.env.local`.
2. Get your API key from [Polygon](https://polygon.io).
3. Replace `YOUR_POLYGON_API_KEY` with your API KEY.
4. Launch the app.

### Launch app in development mode

In the project directory, you can run: `yarn start`. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Run tests

In the project directory, you can run: `yarn test`.
### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
