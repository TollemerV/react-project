import md5 from "md5";

const BASE_URL = "http://localhost:8055/";

const fetchData = async (content, id, body) => {
    
  let collectionURL = `${BASE_URL}/${content}`;
  let contentId = "";
  contentId = typeof id !== 'undefined'  ? "/" + id : "";
  let bodyContent = "";
  bodyContent = typeof id !== 'undefined'  ? bodyContent : "";
  let url = `${collectionURL}${contentId}?access_token=jn48XEIrtPrCBRoXtY-ToNY9KOnxpwyH`;

  try {
    let response = await fetch(url, {
    method: 'PATCH',
    body: bodyContent,
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