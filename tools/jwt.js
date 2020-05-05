import Cookie from '~/tools/cookie/index'

export const setJWTToken = async payload => {
  await Cookie.set('token', payload.accessToken,
    {
      'max-age': payload.expiresIn,
    }
  )
}

export const getJWTToken = () => {
  return Cookie.get('token')
}

export const deleteJWTToken = () => {
  Cookie.delete('token')
}
