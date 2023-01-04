

const BASE_URL = "https://twc350af.directus.app/items";

const deleteReservation = async (id) => {
    
  let url = `${BASE_URL}/reservation/${id}`;
  console.log(id);
  try {
    let response = await fetch(url, {
    method: 'DELETE',
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

export { deleteReservation };