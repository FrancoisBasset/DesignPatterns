import Color from './Color';

export default class Shape {
	protected _x: number;
	protected _y: number;
	protected _color: Color;

	constructor(x: number, y: number, color: Color) {
		this._x = x;
		this._y = y;
		this._color = color;
	}

	public get x(): number {
		return this._x;
	}

	public get y(): number {
		return this._y;
	}

	public get color(): Color {
		return this._color;
	}

	public clone(): Shape {
		return new Shape(this._x, this._y, this._color);
	}

	public toString(): string {
		return `x: ${this._x} y: ${this._y} color: ${this._color}`;
	}
}
