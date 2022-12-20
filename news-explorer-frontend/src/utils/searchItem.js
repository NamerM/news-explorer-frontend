import {data} from '../utils/data';

// function searchItems(searchValue) {
//   console.log(searchValue);
//   const filteredData = data.filter(item => item.keyword === searchValue);
//   return filteredData
// }

// export default searchItems;

function searchItems(searchValue, setFilteredResults) {
  if(searchValue !== '') {
    let searchResult = data.filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase());
    })
    setFilteredResults(searchResult);
  } 
  else { console.log("nothing found....")}
}

export default searchItems;