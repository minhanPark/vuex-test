import axios from "axios";

export const getTodos = () =>
  axios.get("https://jsonplaceholder.typicode.com/todos");

export const find = (data, headers) =>
  axios.put(this.baseURL.concat("api/captor/find/"), data, {
    headers: { "Content-Type": "application/json", ...headers },
  });
