export const getPosts = (query) => {
  return fetch(`${process.env.REACT_APP_URL}search?query=${query}`)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getPostDetailsById = (id) => {
  return fetch(`${process.env.REACT_APP_URL}items/${id}`)
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
