export const makeTitle = (items, service) => `${items.join(" / ")} — ${service}`

export const makeSEO = (title) => {
  return {
    title,
  }
}
