import { hubs } from '~/consts/api'

const all = $axios => async (limit, offset) => {
  try {
    const payload = {
      limit: limit || 10,
      offset: offset || 0
    }
    const {data} = await $axios.post(`${hubs}/all`, payload)

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default all
