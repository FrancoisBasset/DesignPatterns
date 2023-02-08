import Color from './Color';
import Shape from './Shape';

export default class Circle extends Shape {
	private _radius: number;

	constructor(x: number, y: number, color: Color, radius: number) {
		super(x, y, color);
		this._radius = radius;
	}

	public get radius(): number {
		return this._radius;
	}

	public clone(): Circle {
		return new Circle(this._x, this._y, this._color, this._radius);
	}

	public toString(): string {
		return `${super.toString()} radius: ${this._radius}`;
	}
}
