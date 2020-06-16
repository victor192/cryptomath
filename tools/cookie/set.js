const set = async (name, value, options = {}) => {
  options = {
    path: "/",
    ...options,
  }

  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey
    let optionValue = options[optionKey]
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue
    }
  }

  document.cookie = updatedCookie
}

export default set
