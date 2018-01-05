export class Edge {
  constructor (p1, p2, polygonID) {
    this.p1 = p1
    this.p2 = p2
  }

  getOtherPointInEdge (point) {
    return this.p1.isPointEqual(point) ? this.p2 : this.p1
  }

  areEdgesEquals (otherEdge) {
    if (this.p1 === otherEdge.p1 && this.p2 === otherEdge.p2) return true
    if (this.p12 === otherEdge.p1 && this.p1 === otherEdge.p2) return true
    return false
  }

  containsPoint (point) {
    if (this.p1.isPointEqual(point) || this.p2.isPointEqual(point)) return true
    return false
  }
}