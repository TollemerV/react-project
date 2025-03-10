

const BASE_URL = "https://twc350af.directus.app/items";

const fetchData = async (content, nbPersonValue, dateValue, nameValue) => {
    
  let url = `${BASE_URL}/${content}`;
  console.log(nbPersonValue +" | "+ dateValue +" | "+ nameValue);
  try {
    let response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
            nbPerson: nbPersonValue,
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