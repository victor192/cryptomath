import { organizations } from '~/consts/api'

const all = $axios => async (filters, sorts, limit, offset, search) => {
  try {
    const payload = {
      filters: filters || [],
      sorts: sorts || [],
      limit: limit || 10,
      offset: offset || 0,
      search: search || false
    }
    const {data} = await $axios.post(`${organizations}/all`, payload)

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default all
