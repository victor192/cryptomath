import { auth } from "~/consts/api"
import { ResponseError } from "~/tools/errors/response"

const login = ($axios) => async (payload) => {
  try {
    const { data } = await $axios.post(`${auth}/login`, payload)

    return data
  } catch (err) {
    throw err?.response?.data
      ? new ResponseError(err.response.data)
      : new Error(err)
  }
}

export default login
