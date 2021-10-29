import apiClient from '@/service/AxiosClient.js'

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
