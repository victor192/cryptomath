import { captcha } from '~/consts/api'

const generate = async ($axios) => {
  try {
    const {data} = await $axios.get(`${captcha}/generate`)

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default generate
