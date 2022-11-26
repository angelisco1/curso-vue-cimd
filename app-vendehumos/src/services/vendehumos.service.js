import Config from '@/config'
import axios from 'axios'



const VendehumosClient = axios.create({
  baseURL: Config.URL_BASE
})


// const findAll = async () => {
// const resp = await VendehumosClient.get('/vendehumos')
// return resp.data
// }
const findAll = () => {
  return VendehumosClient.get('/vendehumos')
}

const findById = (vendehumoId) => {
  return VendehumosClient.get(`/vendehumos/${vendehumoId}`)
}

const create = (vendehumo) => {
  return VendehumosClient.post('/vendehumos', vendehumo)
}

const update = (vendehumo) => {
  return VendehumosClient.put(`/vendehumos/${vendehumo.id}`, vendehumo)
}

export default {
  findAll,
  findById,
  create,
  update,
}