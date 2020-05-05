export default async function ({ store, route, redirect }) {
  if (process.client) {
    const isAuthToken = store.getters['auth/isToken']

    if (isAuthToken) {
      await store.dispatch('profile/setProfile')

      const isAutheficated = store.getters['profile/isAutheficated']

      if (!isAutheficated && route.fullPath.search('profile')) {
        //redirect('/')
      }
    }
  }
}
