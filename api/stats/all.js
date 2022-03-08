import { stats } from "~/consts/api"
import { ResponseError } from "~/tools/errors/response"

const all = ($axios) => async () => {
  try {
    const { data } = await $axios.get(stats)

    return data
  } catch (err) {
    throw err.response?.data
      ? new ResponseError(err.response.data)
      : new Error(err)
  }
}

export default all
