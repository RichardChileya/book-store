import axios from 'axios';

// const booksApi = async () => {
//   const baseURL = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps', {
//     method: 'POST',
//   });
//   const result = await baseURL.text();
//   console.log(result);
// };
// booksApi();

const http = axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi',
});

const ID = 'El3KzJd0Kgn3m8pN8kcv';

const create = () => http.post('/apps');

const update = (book) => http.post(`apps/${ID}/books`, book);

const getAll = (id = ID) => http.get(`/apps/${id}/books`);

const remove = (bookId) => http.delete(`/apps/${ID}/books/${bookId}`);

const apiKey = {
  create,
  update,
  getAll,
  remove,
};

export default apiKey;
