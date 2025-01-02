import axios from "axios";
import { Product, IClass } from "../types ";
const URL = import.meta.env.VITE_API_BASE_URL;

async function getProducts() {
  const { data } = await axios.get(`${URL}/products`);

  return data as Product[];
}

async function getClasses() {
  const { data } = await axios.get(`${URL}/classes`);

  return data as IClass[];
}

export { getProducts, getClasses };
