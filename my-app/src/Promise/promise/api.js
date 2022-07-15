const api = {
  sendStudentsCountToItKamasutra(studentsCount) {
    return axios.post("https://it-kamasutra.com/students-need",
      {count: studentsCount});
  },
  getVacanciesCountFromMicrosoft() {
    const pr = axios.get("https://microsoft.com")
    return pr.then(res => {
      return res.data.vacancies
    })
  },
  getVacanciesCountFromGoogle() {
    const pr = axios.get("https://google.com");
    return pr.then(res => {
      return res.data.vacancies
    })
  }
}