import axios from "axios";


const api = axios.create({
  baseURL: 'https://restcountries.com/v3.1/', // Ajuste conforme o ambiente
});

export default api;