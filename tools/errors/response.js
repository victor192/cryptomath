export class ResponseError {
  constructor(source) {
    this.code = source.code || null
    this.message = source.message || ""
  }
}
