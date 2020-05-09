import { stats } from '~/consts/api'

const tags = $axios => async () => {
  try {
    const {data} = await $axios.get(`${stats}/tags`)

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default tags
