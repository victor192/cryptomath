import { tags } from "~/consts/api"
import { ResponseError } from "~/tools/errors/response"

const all = ($axios) => async (limit, offset) => {
  try {
    const payload = {
      limit: limit || 10,
      offset: offset || 0,
    }
    const { data } = await $axios.get(tags)

    return data
  } catch (err) {
    throw err.response?.data
      ? new ResponseError(err.response.data)
      : new Error(err)
  }
}

export default all
