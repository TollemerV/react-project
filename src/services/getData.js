

const BASE_URL = "http://localhost:8055/items";

const getData = async (content) => {
    
  let url = `${BASE_URL}/${content}`;
  try {
    let response = await fetch(url, {
    method: 'GET',
    headers: {
          'Content-type': 'application/json; charset=UTF-8',
    }
});
    let result = await response.json();
    
    return result;
  } catch (err) {
    console.error(err);
    return;
  }
};

export { getData };