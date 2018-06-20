export default class CoordinatesFactory {
  /**
   * @param {Array.<Array.<number>>} array
   *
   * @return {Array.<Coordinates>}
   */
  static make (array) {
    return array.map(item => {
		const [x, y] = item
      return new Coordinates(x, y)
    })
  }
}
