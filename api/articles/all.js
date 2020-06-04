import { articles } from '~/consts/api'

const all = $axios => async (filters, sorts, limit, offset, search, extended) => {
  try {
    const payload = {
      filters: filters || [],
      sorts: sorts || [],
      limit: limit || 10,
      offset: offset || 0,
      search: search || false,
      extended: extended || false
    }
    const {data} = await $axios.post(`${articles}/all`, payload)

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default all
