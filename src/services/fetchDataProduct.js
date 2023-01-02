

const URL = "https://twc350af.directus.app/items/Product";

const fetchDataProduct = async (content, qty, qtyN, nameValue) => {
    
  
  console.log(qty +" | "+ qtyN +" | "+ nameValue);
  try {
    let response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
            requiredQty: qtyN,
            quantity : qty,
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

export { fetchDataProduct };