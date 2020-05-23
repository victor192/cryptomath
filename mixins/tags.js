export default {
  name: "TagsMixin",
  methods: {
    tagLink(tag) {
      return this.localePath({name: 'tags-id', params: {id: tag.id}})
    }
  }
}
