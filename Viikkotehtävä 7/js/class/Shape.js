export class Shape {
    _x
    _y
    _lineWidth

    constructor(x, y){
    this._x = x
    this._y = y
    this._lineWidth = this._lineWidth
    }
    
    set setLineWidth(lineWidth) {
        this._lineWidth = lineWidth
    }
}