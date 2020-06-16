import { stats } from "~/consts/api"

const all = ($axios) => async () => {
  try {
    const { data } = await $axios.get(`${stats}/all`)

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default all
