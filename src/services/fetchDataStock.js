

const BASE_URL = "https://twc350af.directus.app/items";

const fetchDataStock = async (id, nameValue, requiredQty, quantity) => {
    
  let url = `${BASE_URL}/product/${id}`;
  console.log(id +" | "+ nameValue +" | "+ requiredQty +" | "+ quantity);
  try {
    let response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify({
            name: nameValue,
            requiredQty : requiredQty,
            quantity : quantity
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

export { fetchDataStock };