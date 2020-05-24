export default {
  name: "HubsMixin",
  methods: {
    getHubLocale(id) {
      switch (id) {
        case 1:
          return this.$t('hubs.mathematics')
        case 2:
          return this.$t('hubs.programming')
        case 3:
          return this.$t('hubs.blockchain')
      }

      return false
    },
    getHubTitle(id) {
      const locale = this.getHubLocale(id)

      return locale ? locale.title : ''
    },
    getHubDescription(id) {
      const locale = this.getHubLocale(id)

      return locale ? locale.description : ''
    },
    hubIconSrc(id) {
      const path = '/images/hubs'
      let name = 'mathematics'

      switch (id) {
        case 1:
          name = 'mathematics'
          break
        case 2:
          name = 'programming'
          break
        case 3:
          name = 'blockchain'
          break
      }

      return path + '/' + name + '.svg'
    },
    hubLink(hub) {
      return this.localePath({name: 'hubs-id', params: {id: hub.id}})
    }
  }
}
