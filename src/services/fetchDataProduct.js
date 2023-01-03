

const URL = "https://twc350af.directus.app/items/product";

const fetchDataProduct = async (qty, qtyN, nameValue) => {
    
  
  console.log(qty +" | "+ qtyN +" | "+ nameValue);
  try {
    let response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
            name : nameValue,
            quantity : qty,
            requiredQty: qtyN
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