export default async function ({ store, $axios, route, redirect }) {
  const isAuthToken = store.getters['auth/isToken']

  if (isAuthToken) {
    await store.dispatch('profile/setProfile')

    const isAuthorized = store.getters['profile/isAuthorized']

    if (!isAuthorized && route.fullPath.search('profile') > 0) {
      redirect('/')
    }
  }
}
