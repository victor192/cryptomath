export const checkNested = (obj, objStructure) => {
  for (let key of objStructure) {
    if (Array.isArray(key) && key.length > 1) {
      const nestedKey = key[0]
      const nestedStructure = key[1]

      if (
        !obj.hasOwnProperty(nestedKey) ||
        !checkNested(obj[nestedKey], nestedStructure)
      ) {
        return false
      }
    } else if (!obj.hasOwnProperty(key)) {
      return false
    }
  }

  return true
}
