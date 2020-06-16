import { captcha } from "~/consts/api"

const generate = ($axios) => async () => {
  try {
    const { data } = await $axios.get(`${captcha}/generate`)

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default generate
