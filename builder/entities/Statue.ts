import Product from './Product';

export default class Statue extends Product {
	public name: string;

	constructor(name: string, price: number) {
		super(price);
		this.name = name;
	}
}
