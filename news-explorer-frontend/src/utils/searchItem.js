import {data} from '../utils/data';

function searchItems(searchValue) {
  console.log(searchValue);
  const filteredData = data.filter(item => item.keyword === searchValue);
  return filteredData
}

export default searchItems;