import set from '~/tools/cookie/set'

const _delete = async name => {
  set(name, '', {
    'max-age': -1,
  })
}

export default _delete
