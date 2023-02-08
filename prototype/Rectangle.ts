import Color from './Color';
import Shape from './Shape';

export default class Rectangle extends Shape {
	private _width: number;
	private _height: number;

	constructor(x: number, y: number, color: Color, width: number, height: number) {
		super(x, y, color);
		this._width = width;
		this._height = height;
	}

	public get width(): number {
		return this._width;
	}

	public get height(): number {
		return this._height;
	}

	public clone(): Rectangle {
		return new Rectangle(this._x, this._y, this._color, this._width, this._height);
	}

	public toString(): string {
		return `${super.toString()} width: ${this._width} height: ${this._height}`;
	}
}
