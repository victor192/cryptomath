import { profile } from '~/consts/api'

const get = async ($axios) => {
  try {
    const { data } = await $axios.post(`${profile}/me`)

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default get
