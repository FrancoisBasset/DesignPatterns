import Product from './Product';

export default class Garden extends Product {
	public surface: number;
	
	constructor(surface: number) {
		super(surface * 1000);
		this.surface = surface;
	}
}
