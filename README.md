# CryptoCurrency Tracker

A challenge to create a SPA to track the top 10 cryptocurrencies in real time. Bootstrapped with create-react-app.

[See it live here](https://jackstandbridge.github.io/crypto-tracker/)

## Approach

My approach was as follows:

### Planning stage

- analyse the designs and break them down into components that would be needed to construct the pages
- analyse the data from the api endpoints and determine which pieces of information were needed for the different components of the app
- plan the structure of the Redux store

### Building stage

- create all of the components identified in the previous steps and add bare JSX with default props
- set up routing to place the components within each other and on each page with the correct structure. I used react-router-dom to do this.
- feed in dummy data to the components. I originally planned to use the example.json files to do this, but in fact there was little enough data needed for the components that it seemed like it wouldn't save much time from the next step
- set up Redux and make API requests for data. Store it in the Redux state and pass it down to the components that need it
  - at this step I noticed that the data needed for the single currency page was not complete at the suggested endpoint. Specifically that the full name of the currency and the rank of the currency were not returned. To save from making multiple different API requests I determined that it would be simplest to just have one API request which fetched the data for the top 10. This request contains all the data we need for an individual currency and for the other currencies that the user is likely to view.
- resend this API request every minute
- enable currency selection
  - this step required a little restructure of the Redux state as I had kept all the data for a single currency flat to start with, but I realised that it would be wasteful to overwrite data that we had already fetched, so for each real-world currency specific set of data I created another object to contain this data.
- display when the last update was by keeping track of the time the request was made and have an interval in the header component that checks this value against the current time every second
- sorting the table
  - when planning the shape of the Redux state I chose [normalised state](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape) as a way that would make this kind of operation simple to code. This approach has every advantage of the iterability and ordering of an array with the ease and efficiency of access of an object, so it's a good candidate for this kind of data.
- add loading spinners when data is being fetched for a particular currency for the first time. That means when fetching USD currency pairs for the first time, a loading spinner will display since we have no data for those pairs. When refetching any USD currency pairs there will be no loading spinner, since we already have access to some data for those pairs.

### Concerns

- Accessibility
  - much of the text on these designs is very low contrast, and is not particularly large. I have tried to be as faithful to the designs as the time permitted, but an accessibility review would be a top priority if this were a real-world project.
- Responsivity
  - No mobile designs were provided, so I took no steps towards making the site responsive. Tabular data is difficult to present on small screens anyway, so a review of exactly how mobile users should use this site would be necessary.
- Browser compatibility
  - I didn't have any time to dedicate to cross browser testing, so the site works as expected in the latest version of Google Chrome, but may have unexpected bugs and layout issues in other browsers
- Payload size
  - requesting all the data for every currency when the user just visits one page may seem unnecessary. The JSON responses that are sent back from the endpoint are smaller than some of the PNG files used for the logo, so it's not a huge concern, but is something that could be optimized.
- Material UI
  - I implemented this because the dropdown of a select box is not a browser feature, but an operating system feature, so as such is impossible to style as in the designs. The only solution is to create a new element that has the behaviour of the original. This is time consuming and seems wasteful when this has already been completed by other developers. However, I'm not very familiar with Material UI and as such the implementation may be sub-optimal. This would warrant further investigation.
