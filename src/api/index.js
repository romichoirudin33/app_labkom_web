import Axios from "axios";

import { BASE_URL as ROOT_URL } from "../config";

export var BASE_URL = ROOT_URL + "/api/";

export function ajax() {
  return Axios.create({
    baseURL: BASE_URL
  });
}
