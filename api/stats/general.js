import { stats } from '~/consts/api'

const general = $axios => async () => {
  try {
    const {data} = await $axios.get(`${stats}/general`)

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default general
