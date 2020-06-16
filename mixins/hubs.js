export default {
  name: "HubsMixin",
  methods: {
    getHubLocale(id) {
      switch (id) {
        case 1:
          return this.$t("hubs.mathematics")
        case 2:
          return this.$t("hubs.programming")
        case 3:
          return this.$t("hubs.blockchain")
      }

      return false
    },
    getHubTitle(hub) {
      const locale = this.getHubLocale(hub.id)

      return locale ? locale.title : hub.name
    },
    getHubDescription(hub) {
      const locale = this.getHubLocale(hub.id)

      return locale ? locale.description : hub.description
    },
    hubLink(hub) {
      return this.localePath({
        name: "hubs-id",
        params: { id: hub.id },
      })
    },
  },
}
