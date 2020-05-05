import get from '~/tools/cookie/get'
import set from '~/tools/cookie/set'
import _delete from '~/tools/cookie/delete'

const Cookie = {
  get: get,
  set: set,
  delete: _delete,
}

export default Cookie
