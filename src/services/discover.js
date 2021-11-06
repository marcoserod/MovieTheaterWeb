import { get } from "axios";

const BASE_ENDPOINT = `${process.env.REACT_APP_URL}discover/movie`;
const API_KEY = process.env.REACT_APP_API_KEY;

console.log(BASE_ENDPOINT);

export const getMoviesByDiscovery = () => {
  return get(BASE_ENDPOINT, {
    params: {
      api_key: API_KEY,
    },
  }).then(({ data }) => data);
};
