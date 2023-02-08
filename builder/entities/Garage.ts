import Product from './Product';

export default class Garage extends Product {
	public area: number;

	constructor(area: number) {
		super(area * 1000);
		this.area = area;
	}

	public getArea(): number {
		return this.area;
	}
}
