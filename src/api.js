// const Method = {
//   GET: `GET`,
//   POST: `POST`,
//   PUT: `PUT`,
//   DELETE: `DELETE`
// };

export const api = (url=``) => {
  let baseUrl = url;

  const setBaseUrl = (url) => {
    baseUrl = url;
  };

  const get = (url) => {
    return fetch(`${baseUrl}${url}`)
      .then(response => response.json());
  };

  return {
    setBaseUrl,
    get
  };
};
