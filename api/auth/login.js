import { auth } from '~/consts/api'

const login = async ($axios, payload) => {
  try {
    const {data} = await $axios.post(`${auth}/login`, payload)

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default login
