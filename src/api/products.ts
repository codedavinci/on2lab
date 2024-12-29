import axios from "axios";
import { Product } from "../types ";

const URL = import.meta.env.VITE_API_BASE_URL;

async function getProducts() {
  const { data } = await axios.get(`${URL}/products`);

  console.log("FROM API", data);

  return data as Product[];
}

export { getProducts };
