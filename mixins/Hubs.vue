<script>
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
      hubIcon(id) {
        switch (id) {
          case 1:
            return ['hubs', 'mathematics']
          case 2:
            return ['hubs', 'coding']
          case 3:
            return ['hubs', 'blockchain']
        }

        return ['hubs', 'mathematics']
      },
      hubLink(hub) {
        return this.localePath({name: 'hubs-id', params: {id: hub.id}})
      }
    }
  }
</script>
