

const BASE_URL = "https://twc350af.directus.app/items";

const fetchDataDish = async (id, nameValue, priceValue, collection) => {
    
  let url = `${BASE_URL}/${collection}/${id}`;
  console.log(id +" | "+ nameValue +" | "+ priceValue +" | "+ collection);
  try {
    let response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify({
            name: nameValue,
            price : priceValue
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

export { fetchDataDish };