import { auth } from '~/consts/api'

const register = $axios => async (payload) => {
  try {
    const {data} = await $axios.post(`${auth}/register`, payload)

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default register
