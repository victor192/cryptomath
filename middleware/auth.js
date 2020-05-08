export default async function ({ store, route, redirect }) {
  const isAuthToken = store.getters['auth/isToken']

  if (isAuthToken) {
    try {
      await store.dispatch('profile/setProfile')

      const isAuthorized = store.getters['profile/isAuthorized']

      if (!isAuthorized && route.fullPath.search('profile') > 0) {
        redirect('/')
      }
    } catch (e) {
      store.dispatch('auth/removeToken')
    }
  }
}
