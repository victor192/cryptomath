import { profile } from "~/consts/api"

const get = ($axios) => async () => {
  try {
    const { data } = await $axios.post(`${profile}/me`)

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default get
