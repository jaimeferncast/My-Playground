import axios from "axios"

class PhonesService {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/phones`,
      withCredentials: true,
    })
  }

  getphones = () => this.api.get("/")
  getPhoneById = (id) => this.api.get(`/${id}`)
}

export default PhonesService
