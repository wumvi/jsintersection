export default class GeometryUtils {
  /**
   *
   * @param {Coordinates} point
   * @param {Array.<Coordinates>} shapes
   *
   * @return {boolean}
   */
  static pointInPolygon (point, shapes) {
    let inside = false
    for (let i = 0, j = shapes.length - 1; i < shapes.length; j = i++) {
      let xi = shapes[i].getX(), yi = shapes[i].getY()
      let xj = shapes[j].getX(), yj = shapes[j].getY()

      let intersect = ((yi > point.getY()) !== (yj > point.getY()))
        && (point.getX() < (xj - xi) * (point.getY() - yi) / (yj - yi) + xi)
      if (intersect) {
        inside = !inside
      }
    }

    return inside
  }
}
