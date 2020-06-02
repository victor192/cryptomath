export default {
  name: "OrganizationsMixin",
  methods: {
    organizationLink(organization) {
      return this.localePath({name: 'organizations-id', params: {id: organization.id}})
    }
  }
}
