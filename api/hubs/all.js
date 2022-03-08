import { hubs } from "~/consts/api"
import { ResponseError } from "~/tools/errors/response"

const all = ($axios) => async (filters, sorts, limit, offset, search) => {
  try {
    const payload = {
      filters: filters || [],
      sorts: sorts || [],
      limit: limit || 10,
      offset: offset || 0,
      search: search || false,
    }
    const { data } = await $axios.get(hubs)

    return data
  } catch (err) {
    throw err.response?.data
      ? new ResponseError(err.response.data)
      : new Error(err)
  }
}

export default all
