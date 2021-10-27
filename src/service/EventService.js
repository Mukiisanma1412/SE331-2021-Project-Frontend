import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPeoplelList(page) {
    return apiClient.get("patients?_limit=8&_page=" + page);
  },
  getPeopleDetail(id) {
    return apiClient.get("patients/" + id);
  },
  getVaccineDetail(id) {
    return apiClient.get("/vaccines/" + id);
  },
};
