## About The Project

This project is a simple React application that allows a user to search for a company by name or by stock symbol and pull up financial data for that company.

When a user enters a company name or stock symbol into the search bar the table will list the relevant companies displaying the name, stock symbol, address, and exchange. When the table row is clicked a modal containing the current stock price, historic stock price, and historic cash flows are displayed.

## Installation

1. Clone the repo
    ```sh
    git clone https://github.com/songsongha/stockSearch.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```
3. Start the development server
    ```sh
    npm run dev
    ```
    or
    ```sh
    yarn dev
    ```
4. In your browser navigate [http://localhost:5173/](http://localhost:5173/)

## Function and Considerations

The app a create-vite project built with React and Typescript. It consists of the following components:

### Data Management

Data is pulled from the [https://site.financialmodelingprep.com/developer/docs] (Financial Modeling Prep) site. React Query is used to cache data so that load time are faster for the user. A custom hook was created to combine the data from the general company api (which allows for search by company name and by stock symbol) with more detailed company information such as the address and current stock price. The generalData api call was limited to NYSE and NASDAQ because when making calls to the profile endpoint because I learned that the free plan is limited to US stocks only and I wanted to avoid errors when doing bulk requests. The generalData api call is also limited to 10 entries since pagination is not available on that endpoint and I wanted to ensure a reasonable number of entries is delivered in the interest of performance.

### SearchBar

The search bar is a simple text input that takes in a setStateAction as a prop and on input set the state in the parent component to the value input into the text field. A debounce function is used reduce the number of calls to the api when the user is typing.

### BasicTable

The table displays data passed in from the parent component. The address is formatted to be on two lines for easier reading and to handle situations where some address field are missing. The table has a maximum width to ensure the table still looks good for wider screens. Row data is passed to the modal component on click.

### ChartModal

This component is responsive, for small screen sizes the charts will stack vertically and for larger screens the graphs will be side by side.

### StockPriceChart

The charts were was built using the Recharts library. It display the daily opening stock prices and the data is sorted to ensure that the chart is showing the data in ascending order by date. If you hover over the chart a tooltip will display the detailed values. If there is no data available that text will be displayed instead of the chart.

### CashFlowChart

The historical cash flow chart is a composite charge with stacked bars to show the three types of cash flow overlayed with a line graph showing net change in cash. The y axis is formatted with large number abbreviations for readability.

### Future Considerations

This application was built in a very short amount of time. Improvements for the future would include:

-   Better formatting of the graphs, i.e. allowing a user to select the time frame of data they wish to see, only showing the years instead of the full date in the cash flow chart.
-   Error handling i.e. providing more feedback to the user when the application is loading or has an error loading data
-   Pagination (assuming the API can support it in the future)
