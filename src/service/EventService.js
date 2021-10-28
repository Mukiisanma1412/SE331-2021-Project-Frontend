import apiClient from '@/service/AxiosClient.js'

export default {
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
},
getEvent(id) {
  return apiClient.get('/events/' + id)
},
saveEvent(event) {
  return apiClient.post('/events', event)
},
  getPeoplelList(page) {
    return apiClient.get("patients?_limit=8&_page=" + page);
  },
  getPeopleDetail(id) {
    return apiClient.get("patients/" + id);
  },
  getVaccineDetail(id) {
    return apiClient.get("/vaccines/" + id);
  },
  getEventByKeyword(keyword, perPage, page) {
    return apiClient.get(
        'events?_limit=' + perPage + '&_page=' + page + '&title=' + keyword
    )
},
uploadFile(file) {
  let formData = new FormData()
  formData.append('file', file)
  return apiClient.post('/uploadFile', formData, {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
  })
}
};
