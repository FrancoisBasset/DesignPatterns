import Product from './Product';

export default class SwimmingPool extends Product {
	public surface: number;
	public depth: number;

	constructor(surface: number, depth: number) {
		super(surface * depth * 1000);
		this.surface = surface;
		this.depth = depth;
	}
}
