export default {
  width: 14,
  height: 14,
  fill: 'black',
  _class: 'flat-icon',
  dom(
    width = this.width,
    height = this.height,
    fill = this.fill,
    _class = this._class
  ) {
    return `<svg width="${width}" height="${height}" viewBox="0 0 512 512" fill="${fill}" class="${_class}" role="img" xmlns="http://www.w3.org/2000/svg"><path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>`
  }
}
