

const BASE_URL = "http://localhost:8055/items";

const fetchData = async (content, numTable, dateValue, nameValue) => {
    
  let url = `${BASE_URL}/${content}`;
  console.log(numTable +" | "+ dateValue +" | "+ nameValue);
  try {
    let response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
            numTable: numTable,
            date : dateValue,
            name : nameValue
        }),
    headers: {
          'Content-type': 'application/json; charset=UTF-8',
    },
});
    let result = await response.json();
    
    return result;
  } catch (err) {
    console.error(err);
    return;
  }
};

export { fetchData };