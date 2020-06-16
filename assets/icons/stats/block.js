export default {
  width: 24,
  height: 24,
  fill: "black",
  _class: "flat-icon",
  dom(
    width = this.width,
    height = this.height,
    fill = this.fill,
    _class = this._class
  ) {
    return `<svg width="${width}" height="${height}" viewBox="0 0 512 512" fill="${fill}" class="${_class}" role="img" xmlns="http://www.w3.org/2000/svg"><path d="m255.989 0-221.693 127.993v255.985l221.693 127.994 221.688-127.994v-255.985zm176.683 136.651-176.683 101.965-176.688-101.965 176.688-102.01zm-368.376 25.977 176.693 101.969v204.074l-176.693-102.013zm206.693 306.043v-204.074l176.688-101.968v204.03z"/></svg>`
  },
}
