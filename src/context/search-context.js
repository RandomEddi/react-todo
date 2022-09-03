import React from "react";

const searchContext = React.createContext({
  searchFilter: null,
  searchHandler: () => {},
})

 export default searchContext