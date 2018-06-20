export default class Coordinates {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor (x, y) {
    /**
     *
     * @type {number}
     * @private
     */
    this.x = x

    /**
     *
     * @type {number}
     * @private
     */
    this.y = y
  }

  /**
   *
   * @return {number}
   */
  getX () {
    return this.x
  }

  /**
   *
   * @return {number}
   */
  getY () {
    return this.y
  }
}
